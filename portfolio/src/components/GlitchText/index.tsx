import React, { useEffect, useState } from 'react';
import {
    getRandomNumber
} from '../../utils';
import './index.scss';

interface GlitchTextProps {
    typing?: boolean,
    text: string,
    minSteps?: number,
    maxSteps?: number,
    onComplete?: Function
}

const GlitchText = (props: GlitchTextProps = {
    typing: false,
    text: "",
    minSteps: 2,
    maxSteps: 4
}) => {
    const {
        typing,
        text,
        minSteps,
        maxSteps,
        onComplete
    } = props;
    const [ currentText, setCurrentText ] = useState("");
    const [ offset, setOffset ] = useState(0);
    const [ stepsCount, setStepsCount ] = useState(0);
    const [ randomNumber, setRandomNumber ] = useState(0);
    const [ complete, setComplete ] = useState(false);

    const letters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*<>/\\+ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    const getRandomLetter = () => {
        let rN = getRandomNumber(letters.length);
        while(rN === randomNumber) {
            rN = getRandomNumber(letters.length);
        }
        setRandomNumber(rN);
        const randomLetter = letters[ rN ];
        return randomLetter;
    }

    useEffect(() => {
        if(onComplete && complete) {
            onComplete(complete);
        }
        // eslint-disable-next-line
    }, [complete]);

    useEffect(() => {
        if(!typing) {
            if(offset < text.length) {
                setTimeout(() => {
                    let letter = getRandomLetter();
                    while(letter === text[offset] && stepsCount < (minSteps || 1)) {
                        letter = getRandomLetter();
                    }
                    const tempText = currentText && stepsCount === 0?currentText:currentText.slice(0, -1);
                    if (stepsCount < (maxSteps || 4)) {
                        setStepsCount(stepsCount + 1);
                        setCurrentText(tempText + letter);
                    } else {
                        setStepsCount(0);
                        setOffset(offset + 1);
                        setCurrentText(tempText + text[offset]);
                    }
                }, 100);
            } else {
                setComplete(true);
            }
        } else {
            if(offset < text.length) {
                setTimeout(() => {
                    let newText = "";
                    let count = 0;
                    for(let i of text) {
                        let letter = getRandomLetter();
                        if(offset >= count) {
                            letter = i;
                        }
                        count++;
                        if(i !== " "){
                            newText += letter;
                        } else {
                            newText += i;
                        }
                    }
                    if (stepsCount >= (maxSteps || 4)) {
                        setStepsCount(0);
                        setOffset(offset + 1);
                    } else {
                        setStepsCount(stepsCount + 1);
                    }
                    setCurrentText(newText);
                }, 100);
            } else {
                setComplete(true);
            }
        }
        // eslint-disable-next-line
    }, [currentText]);

    return (
        <div>{currentText}</div>
    );
}

export default GlitchText;