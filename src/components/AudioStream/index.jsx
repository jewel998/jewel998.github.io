import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AudioNextTrack } from "../../actions/audio";

export const playlist = [
    {
        title: 'Feel It Still',
        artist: 'Portugal. The Man',
        url: process.env.PUBLIC_URL + "/audio/Portugal. The Man - Feel It Still.mp3"
    },
    {
        title: 'Can I Call You Tonight',
        artist: 'Dayglow',
        url: process.env.PUBLIC_URL + "/audio/Dayglow - Can I Call You Tonight.mp3"
    },
    {
        title: 'I Follow',
        artist: 'Castlebeat',
        url: process.env.PUBLIC_URL + "/audio/Castlebeat - I Follow.mp3"
    }
]

const AudioStream = () => {
    const trackId = useSelector(state => state.system.trackId);
    const dispatch = useDispatch();
    const audioLevel = useSelector((state) => state.system.audioLevel);
    const audioMuted = useSelector((state) => state.system.audioMuted);

    const handleMediaStream = () => {
        const r = trackId;
        const audio = document.getElementById("audio");
        audio.src = playlist[r].url;
        audio.load();

        window.media = {
            audio,
            title: playlist[r].title,
            artist: playlist[r].artist
        }
    }

    const nextTrack = () => {
        dispatch(AudioNextTrack());
        setTimeout(() => {
            if (window.media) {
                window.media.audio.play();
            }
        }, 200);
    }
    
    useEffect(() => {
        if (trackId >= 0) {
            handleMediaStream();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trackId]);

    useEffect(() => {
        if (window.media)
            window.media.audio.volume = audioMuted ? 0 : audioLevel;
    }, [audioLevel, audioMuted]);

    return (
        <audio id="audio" onEnded={nextTrack} />
    )
}

export default AudioStream;