import GlobeIcon from "../../components/Icon/globe";

const Question = ({ questionId = 1, question, about, link }) => {
    return (
        <div className="search query">
            <div className="icon">
                <GlobeIcon />
            </div>
            <div className="query-information">
                <h3 className="ellipsis line-clamp-2">
                    {question}
                </h3>
                <p className="ellipsis line-clamp-3">
                    {about}
                </p>
                <a href="https://google.com" target="_blank" rel="noreferrer" className="ellipsis">
                    {link}
                </a>
            </div>
        </div>
    );
}

export { Question };