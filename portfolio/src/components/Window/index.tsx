import React, { ReactElement, useRef, useState } from 'react';
import './index.scss';
import logo from '../../logo.svg';
import Image from '../Image';
import Application from '../../interfaces/application.interface';

interface WindowProps {
    applicationDetails: Application,
    displayBackgroundColor?: string,
    appContext: ReactElement
}

const Window = (props: WindowProps) => {
    const windowRef = useRef(null);
    const displayRef = useRef(null);
    const {
        applicationDetails,
        displayBackgroundColor,
        appContext
    } = props;
    const [ appTitle, setTitle ] = useState(applicationDetails.appName);
    const [ width, setWidth ] = useState(600);
    const [ height, setHeight ] = useState(200);
    const [ x, setX ] = useState(35);
    const [ y, setY ] = useState(50);
    const [ backgroundColor, setBackgroundColor ] = useState(displayBackgroundColor);
    const childProps = {
        appDetails: applicationDetails,
        windowRef: windowRef,
        displayRef: displayRef,
        setTitle: setTitle,
        setWidth: setWidth,
        setHeight: setHeight,
        setX: setX,
        setY: setY,
        setBackgroundColor: setBackgroundColor
    }
    return (
        <div
            ref={windowRef}
            className="window"
            style={{
                width: `${width}px`,
                height: `${height}px`,
                left: `${x}%`,
                top: `${y}%`
            }}
        >
            <div className="title-bar">
                <div className="app-details">
                    <Image className="app-icon" src={logo} alt="app-logo" reverseFit={true}/>
                    <div className="app-title">{ appTitle }</div>
                </div>
                <div className="window-options-container">
                    <div className="window-options">
                        <div tabIndex={1} className="button minimize">
                            <div className="icon"/>
                        </div>
                        <div tabIndex={1} className="button maximize">
                            <div className="icon"/>
                        </div>
                        <div tabIndex={1} className="button close">
                            <div className="icon"/>
                        </div>
                    </div>
                </div>
            </div>
            <div
                ref={displayRef}
                className="display-area"
                style={{
                    background: backgroundColor
                }}
            >
                {
                    React.isValidElement(appContext) && React.cloneElement(appContext, childProps)
                }
            </div>
        </div>
    );
}

export default Window;