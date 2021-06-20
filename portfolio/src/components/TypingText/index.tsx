import React, { useEffect, useState } from 'react';
import { getRandomNumber } from '../../utils';

interface TypingTextProps {
    typing?: boolean
    text: string
    speed: number
    randomSpeed?: boolean
    className?: string
    color?: string
    onComplete?: Function
}

const TypingText = (props: TypingTextProps = {
    typing: true,
    text: "",
    speed: 0
}) => {
    const {
        typing,
        text,
        speed,
        randomSpeed,
        className,
        color,
        onComplete
    } = props;
    const [ currentText, setCurrentText ] = useState(speed <= 0?text:"");
    const [ offset, setOffset ] = useState(0);
    const [ complete, setComplete ] = useState(speed <= 0?true:false);

    useEffect(() => {
        if(onComplete && complete) {
            onComplete(complete);
        }
        // eslint-disable-next-line
    }, [complete]);

    useEffect(() => {
        if(speed > 0) {
            if(!typing && text !== currentText) {
                setTimeout(() => {
                    setCurrentText(text);
                    setComplete(true);
                }, speed);
            } else if(typing && offset < text.length) {
                let randomSpeedValue;
                if(randomSpeed){
                    randomSpeedValue = getRandomNumber(speed, 20);
                }
                setTimeout(() => {
                    setOffset(offset + 1);
                    setCurrentText(text.slice(0, offset + 1));
                }, randomSpeed?randomSpeedValue:speed);
            } else if ( text === currentText ){
                setComplete(true);
            }
        }
        // eslint-disable-next-line
    }, [currentText]);

    return (
        <span
            className={className}
            style={{color:color}}
        >
            {currentText}
        </span>);
}

export default TypingText;