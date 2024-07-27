import PDFIcon from '../../assets/images/pdf_icon.png';
import Image from "../Image";
import './index.scss';

const DesktopIcon = ({ icon, name, onOpen }) => {

    function getName() {
        const tokens = name.split('.');

        if (tokens.length > 1) tokens.pop();

        return tokens.join('.');
    }

    return (
        <div tabIndex={0} className="__desktop_icon">
            <div className="app-details">
                <Image className="icon" src={icon} alt="file icon" />
                <p className='line-clamp-1'>{getName()}</p>
            </div>
        </div>
    );
}

const DesktopIcons = () => {
    return (
        <div id="DesktopIcons">
            <DesktopIcon icon={PDFIcon} name="Resumé.pdf" />
            <DesktopIcon icon={PDFIcon} name="Resumé" />
        </div>
    )
}

export default DesktopIcons;