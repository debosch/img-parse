import './placeholder.scss';

const Placeholder = ({ text }) => {
    return (
        <div className="placeholder-container">
            <p className="placeholder-text">{ text }</p>
        </div>
    );
};

export default Placeholder;