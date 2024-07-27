import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './index.scss';

const AudioLevel = () => {
    const [active, setActive] = useState(false);
    const [showAudioLevel, setShowAudioLevel] = useState(false);
    const audioLevel = useSelector((state) => state.system.audioLevel);
    const audioMuted = useSelector((state) => state.system.audioMuted);

    useEffect(() => {
        if (showAudioLevel) {
            setActive(true);
            const inactiveTimeout = setTimeout(() => {
                setActive(false);
            }, 2000);
            const timeout = setTimeout(() => {
                setShowAudioLevel(false);
            }, 2300);

            return () => {
                clearTimeout(inactiveTimeout);
                clearTimeout(timeout);
            }
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showAudioLevel, audioLevel, audioMuted]);

    useEffect(() => {
        setShowAudioLevel(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [audioLevel, audioMuted]);

    useEffect(() => {
        setShowAudioLevel(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {showAudioLevel && (
                <div id="AudioLevel" className={active ? 'active' : 'inactive'}>
                    <div className="progress">
                        <div className="progress-bar" style={{ height: (audioMuted ? 0 : audioLevel * 100) + '%' }} >
                            <div className="holder" />
                        </div>
                    </div>
                    <div className="audio-level">{Math.round(audioMuted ? 0 : audioLevel * 100)}</div>
                </div>
            )}
        </>
    )
}

export default AudioLevel;