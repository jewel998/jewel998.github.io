import Image from "../../components/Image";
import User from "../../assets/images/user.jpg";
import { ignoreEvent, stopPropagation } from "../../utils";
import { useRef, useState } from "react";
import ArrowRightIcon from '../../components/Icon/arrow-right';
import EyeIcon from '../../components/Icon/eye';
import WifiIcon from "../../components/Icon/wifi";
import PowerIcon from "../../components/Icon/power";
import { useNavigate } from "react-router";
import AppRoutes from "../../constants/routes.constant";
import { FormattedMessage } from "react-intl";
import Loader from "../../components/Loader";

const LoginScreen = ({ show }) => {
    const navigate = useNavigate();
    const [isLoggingIn, setLoggingIn] = useState(false);
    const [hasPassword, setHasPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef();
    const handlePasswordChange = (e) => {
        e.stopPropagation();
        const value = e.currentTarget.value;

        if (value) {
            setHasPassword(true);
        } else {
            setHasPassword(false);
        }
    }

    const handleSubmit = (e) => {
        ignoreEvent(e);
        // const formData = Object.fromEntries(new FormData(e.target));
        // const { password } = formData;

        setLoggingIn(true);
        setTimeout(() => {
            navigate(AppRoutes.KernelScreen, { replace: true });
        }, 4200);
    }

    const toggleShowPassword = () => {
        setShowPassword((previous) => !previous);
        inputRef.current?.focus();
    }

    return (
        <div id="UserSelectionScreen" className={show ? 'active' : 'inactive'}>
            {show && (
                <>
                    <div className="absolute-center">
                        <div className="user">
                            <div className="user-picture">
                                <Image src={User} alt="user picture" />
                            </div>
                            <h1 className="text-center">Jyotirmoy Barman</h1>
                            {!isLoggingIn && (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-field">
                                        <input ref={inputRef} type={!showPassword ? "password" : "text"} name="password" placeholder="Password" autoComplete="off" autoFocus onKeyDown={stopPropagation} onChange={handlePasswordChange} />
                                        {hasPassword && showPassword && <div className="show-password" onClick={toggleShowPassword}><EyeIcon hide /></div>}
                                        {hasPassword && !showPassword && <div className="show-password" onClick={toggleShowPassword}><EyeIcon /></div>}
                                        <button><ArrowRightIcon /></button>
                                    </div>
                                    <p className="hint">
                                        <FormattedMessage
                                            id="lock-screen.password.hint.title"
                                            defaultMessage="Password hint"
                                        />:&nbsp;
                                        <span>
                                            <FormattedMessage
                                                id="lock-screen.password.hint.message"
                                                defaultMessage="Take a guess, be my guest!"
                                            />
                                        </span>
                                    </p>
                                </form>
                            )}
                            {isLoggingIn && (
                                <div className="welcome-text flex flex-row gap-8 items-center">
                                    <Loader size="small" />
                                    <p className="text-xl text-white">
                                        <FormattedMessage id="welcome" defaultMessage="Welcome" />
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="control-options">
                        <button><WifiIcon /></button>
                        <button><PowerIcon /></button>
                    </div>
                </>
            )}
        </div>
    );
}

export default LoginScreen;