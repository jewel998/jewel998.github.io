import React from 'react';
import './index.scss';

interface ImageProps {
    className?: string,
    reverseFit?: boolean,
    src: string,
    alt: string
}

const Image = (props: ImageProps) => {
    const {
        className,
        src,
        alt,
        reverseFit
    } = props;
    return (
        <div className={`__image-container ${className || ''}`}>
            <img className={`${reverseFit?'reverse':''}`} src={src} alt={alt}></img>
        </div>
    )
}

export default Image;