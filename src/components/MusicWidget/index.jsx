import { FormattedMessage } from "react-intl";
import './index.scss';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MusicWidget = () => {
    const [title, setTitle] = useState('Loading...');
    const [artist, setArtist] = useState('Loading...');
    const trackId = useSelector(state => state.system.trackId);
    const [isSetUp, setIsSetUp] = useState(false);

    const registerVisualiser = () => {
        console.group("Registering Visualiser");
        try {
            const audio = window.media.audio;
            let context, src;

            if (!window.audioSource) {
                context = new AudioContext();
                src = context.createMediaElementSource(audio);
                window.audioSource = src;
            } else {
                context = window.audioSource.context;
                src = window.audioSource;
            }
            
            const analyser = context.createAnalyser();

            const canvas = document.getElementById("visualiser");
            const ctx = canvas.getContext("2d");

            src.connect(analyser);
            analyser.connect(context.destination);

            analyser.fftSize = 256;

            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            const WIDTH = canvas.width;
            const HEIGHT = canvas.height;

            const barWidth = (WIDTH / bufferLength) * 1.5;
            let barHeight;
            let x = 0;

            function renderFrame() {
                requestAnimationFrame(renderFrame);

                x = 0;

                analyser.getByteFrequencyData(dataArray);

                ctx.clearRect(0, 0, WIDTH, HEIGHT);

                for (let i = 0; i < bufferLength; i++) {
                    barHeight = dataArray[i] * (HEIGHT / 255);
                    
                    // var r = barHeight + (25 * (i/bufferLength));
                    // var g = 250 * (i/bufferLength);
                    // var b = 50;

                    // ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                    ctx.fillStyle = "white";
                    ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

                    x += barWidth + 1;
                }
            }
            
            renderFrame();
        } catch (exception) {}
        console.groupEnd();
    }

    useEffect(() => {
        if (!isSetUp) {
            setIsSetUp(true);
        } else {
            registerVisualiser();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSetUp]);

    useEffect(() => {
        if (trackId >= 0) {
            const timeout = setTimeout(() => {
                setTitle(window.media.title);
                setArtist(window.media.artist);
            }, 500);

            return () => {
                clearTimeout(timeout);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trackId]);

    return (
        <div id="MusicWidget">
            <div className="visualiser">
                <canvas id="visualiser" />
            </div>
            <div className="controls-container">
                <p className="now-playing">
                    <FormattedMessage id="now-playing" defaultMessage="Now playing" />
                </p>
                <div className="separator" />
                <div className="music-details">
                    <h3 className="line-clamp-1">{title}</h3>
                    <p className="line-clamp-1">{artist}</p>
                    </div>
            </div>
        </div>
    );
}

export default MusicWidget;