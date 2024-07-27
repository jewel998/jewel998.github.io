import AppRoutes from "../../constants/routes.constant";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Image from '../../components/Image';
import Dell from '../../assets/images/dell.png';
import './index.scss';
import Loader from "../../components/Loader";

const BootScreen = () => {
    const totalLoadingTime = 5600;
    const initialLoaderDelay = 600;
    const [isShowingLoader, setShowingLoader] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const stopLoaderTime = Math.floor((totalLoadingTime - initialLoaderDelay) / 4000) * 4000 + initialLoaderDelay + 200;
        const loaderTimeout = setTimeout(() => {
            setShowingLoader(true);
        }, initialLoaderDelay);
        const loaderTimeout2 = setTimeout(() => {
            setShowingLoader(false);
        }, stopLoaderTime);
        const timeout = setTimeout(() => {
            console.groupCollapsed("BIOS Boot");
            window.sessionStorage.setItem('booted', true);
            navigate(AppRoutes.WelcomeScreen, { replace: true });
            console.groupEnd();
        }, totalLoadingTime);

        return () => {
            clearTimeout(loaderTimeout);
            clearTimeout(loaderTimeout2);
            clearTimeout(timeout);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="BootScreen" className="relative w-[100vw] h-[100vh] bg-black">
            <div className="absolute-center pb-80">
                <Image className="dell-logo" src={Dell} alt="Dell Logo" />
            </div>
            <div className="absolute bottom-0 right-0 hidden md:block">
                <div className="bottom-options opacity-80">
                    <p>F2 Setup</p>
                    <p>F12 Boot Options</p>
                </div>
            </div>
            {isShowingLoader && <div className="uefi-fast-load">
                <Loader />
            </div>}
        </div>
    )
}

export default BootScreen;