import './index.scss';
import WindowsIcon from '../../components/Icon/windows';
import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import WifiIcon from '../Icon/wifi';
import AudioIcon from '../Icon/audio';
import { useSelector } from 'react-redux';
import NotificationIcon from '../Icon/notification';

const Taskbar = () => {
    const audioLevel = useSelector((state) => state.system.audioLevel);
    const audioMuted = useSelector((state) => state.system.audioMuted);
    const [current, setCurrentTime] = useState(DateTime.local().setZone('UTC+05:30'));

    useEffect(() => {
        const timeout = setInterval(() => {
            setCurrentTime(DateTime.local().setZone('UTC+05:30'));
        }, 10000);

        return () => {
            clearInterval(timeout);
        }
    }, []);
    return (
        <div id="Taskbar" className="flex flex-row items-center justify-between">
            <div className="left flex flex-row">
                <div tabIndex={0} id="StartButton" className="button">
                    <WindowsIcon />
                </div>
            </div>
            <div className="right flex flex-row">
                <div className="audio button px-0">
                    <AudioIcon level={audioMuted ? 0 : audioLevel} />
                </div>
                <div className="wifi button px-0">
                    <WifiIcon />
                </div>
                <div className="keyboard-locale button">
                    <p>ENG</p>
                    <p>INTL</p>
                </div>
                <div className="date-time button">
                    <p>{current.toLocaleString({ hour: 'numeric', minute: '2-digit', hourCycle: 'h12' })}</p>
                    <p>{current.toLocaleString({ day: 'numeric', month: 'long', year: '2-digit' }).replace(/\s/g, '-')}</p>
                </div>
                <div className="notification button">
                    <NotificationIcon />
                </div>
                <div id="ShowDesktop" className="button"></div>
            </div>
        </div>
    );
}

export default Taskbar;