import { useEffect, useState } from 'react';
import './index.scss';
import TypingText from '../TypingText';
import Application from '../../interfaces/application.interface';
import { lines } from '../../constants/terminal.constants';
import { metasploitBannerLines, metasploitTerminalHacking } from '../../constants/metasploit.constants';

interface TerminalProps {
    appDetails?: Application
    displayRef?: any
    setTitle?: Function
    setHeight?: Function
    setWidth?: Function
    setX?: Function
    setY?: Function
    setBackgroundColor?: Function
}

const Terminal = (props: TerminalProps) => {
    const {
        displayRef,
        setTitle,
        setHeight,
        setWidth,
        setX,
        setY,
        setBackgroundColor
    } = props;
    const [ line, setLine ] = useState(0);
    const [ msfLine, setMsfLine ] = useState(0);

    useEffect(() => {
        if(lines.length === line) {
            if(displayRef && displayRef.current) {
                displayRef.current.scrollBy(0, 200);
            }
        }
        // eslint-disable-next-line
    }, [line]);

    useEffect(() => {
        if(msfLine === 4) {
            if(displayRef && displayRef.current) {
                displayRef.current.scrollBy(0, 200);
            }
        } else if (msfLine === 6) {
            if(displayRef && displayRef.current) {
                displayRef.current.scrollBy(0, 200);
            }
        } else if (msfLine === 12) {
            if(displayRef && displayRef.current) {
                displayRef.current.scrollBy(0, 200);
            }
        } else if (msfLine === 28) {
            if(displayRef && displayRef.current) {
                displayRef.current.scrollBy(0, 200);
            }
        }
        // eslint-disable-next-line
    }, [msfLine]);

    useEffect(() => {
        if(setTitle) {
            setTitle("Terminal - jyotirmoy.barman");
        }
        if(setHeight) {
            setHeight(600);
        }
        if(setWidth) {
            setWidth(800);
        }
        if(setX) {
            setX(10);
        }
        if(setY) {
            setY(10);
        }
        if(setBackgroundColor) {
            setBackgroundColor('#000000c5');
        }
        // eslint-disable-next-line
    }, []);

    interface LineType {
        typing?: boolean
        text: string
        speed: number
        randomSpeed?: boolean
        color?: string
        className?: string
    }

    return (
        <div className="__terminal">
            {
                lines.map((element: LineType[], index) => {
                    if(index <= line) {
                        return (
                            <div key={index}>{
                                element.map((e: LineType, i) => (
                                    <code
                                        key={i}
                                        className={e.className}
                                    >
                                        <TypingText
                                            typing={e.typing === undefined?true:e.typing}
                                            text={e.text}
                                            speed={e.speed}
                                            randomSpeed={e.randomSpeed}
                                            onComplete={() => {
                                                if(element.length - 1 === i) {
                                                    setLine(line + 1)
                                                }
                                            }}
                                        />
                                    </code>
                                ))
                            }</div>
                        );
                    }
                    return null;
                })
            }
            {
                metasploitBannerLines.map((element: LineType[], index) => {
                    if(lines.length === line) {
                        return (
                            <div key={index}>{
                                element.map((e: LineType, i) => (
                                    <code
                                        key={i}
                                        className={e.className}
                                    >
                                        {e.text}
                                    </code>
                                ))
                            }</div>
                        );
                    }
                    return null;
                })
            }
            {
                (lines.length === line ) && metasploitTerminalHacking.map((element: LineType[], index) => {
                    if(index <= msfLine) {
                        return (
                            <div key={index}>{
                                element.map((e: LineType, i) => (
                                    <code
                                        key={i}
                                        className={e.className}
                                    >
                                        <TypingText
                                            typing={e.typing === undefined?true:e.typing}
                                            text={e.text}
                                            speed={e.speed}
                                            randomSpeed={e.randomSpeed}
                                            color={e.color}
                                            onComplete={() => {
                                                if(element.length - 1 === i) {
                                                    setMsfLine(msfLine + 1)
                                                }
                                            }}
                                        />
                                    </code>
                                ))
                            }</div>
                        );
                    }
                    return null;
                })
            }
        </div>
    )
}

export default Terminal;