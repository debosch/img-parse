import './image.scss';

const Image = ({ source }) => {
    return (
        <div className="image-container">
            <img className="image-container__img" src={ source } width="350" height="400" />
        </div>
    );
};

export default Image;