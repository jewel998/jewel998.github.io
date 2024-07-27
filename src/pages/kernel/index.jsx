import Image from '../../components/Image';
import './index.scss';
import LockScreen from '../../assets/images/lock_screen.jpg';
import Taskbar from '../../components/Taskbar';
import AudioLevel from '../../components/AudioLevel';
import MusicWidget from '../../components/MusicWidget';
import StickyNote from '../../components/StickyNote';
import DesktopIcons from '../../components/DesktopIcon';

const Kernel = () => {
    return (
        <div id="KernelScreen">
            <Image
                className="wallpaper"
                src={LockScreen}
                alt="lock screen background"
            />
            <AudioLevel />
            <Taskbar />
            <MusicWidget />
            <StickyNote />
            <DesktopIcons />
        </div>
    )
}

export default Kernel;