const Image = ({ className, src, alt }) => {
    return (
        <div className={"__img_container " + className }>
            <img src={src} alt={alt} />
        </div>
    );
}

export default Image;