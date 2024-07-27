const AudioIcon = (props) => {
    const { level = 1 } = props;
    let scale = 3;

    if (level >= 0.75) scale = 3;
    else if (level >= 0.5) scale = 2;
    else if (level >= 0.25) scale = 1;
    else scale = 0;

    return (
        <svg {...props} fill="none" style={{ fill: 'none' }} strokeWidth="1.5" stroke="white" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="icon" xmlns="http://www.w3.org/2000/svg">
            <path d="M 9 7.25 v 9 l -2.5 -2.5 l -1.5 0 l 0 -4 l 1.5 0 l 2.5 -2.5"></path>
            {scale > 0 && <path d="M 12 9.5 a 5 5 0 0 1 0 5"></path>}
            {scale <= 0 && <path d="M 12 9.5 a 5 5 0 0 1 0 5" stroke="#434343"></path>}
            {scale > 1 && <path d="M 14.5 8 a 10 10 0 0 1 0 8"></path>}
            {scale <= 1 && <path d="M 14.5 8 a 10 10 0 0 1 0 8" stroke="#434343"></path>}
            {scale > 2 && <path d="M 17.25 6.25 a 15 15 0 0 1 0 11"></path>}
            {scale <= 2 && <path d="M 17.25 6.25 a 15 15 0 0 1 0 11" stroke="#434343"></path>}
        </svg>
    )
}

export default AudioIcon;