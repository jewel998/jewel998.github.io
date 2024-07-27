import './index.scss';

const Loader = ({
    type = 'default',
    size = 'medium'
}) => {
    switch (type) {
        default:
            return (
                <div className={`__loader ${size} ${type}`} >
                    <span className="ellipse-0"></span>
                    <span className="ellipse-1"></span>
                    <span className="ellipse-2"></span>
                    <span className="ellipse-3"></span>
                    <span className="ellipse-4"></span>
                </div>
            );
    }
}

export default Loader;