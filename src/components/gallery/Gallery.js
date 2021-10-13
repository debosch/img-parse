import Input from "../input/Input";
import Image from "../Image/Image";
import Placeholder from "../placeholder/Placeholder";
import { useDispatch, useSelector } from "react-redux";

import './gallery.scss';

const Gallery = () => {
    const images = useSelector(state => state.images);

    return (
        <div className="gallery">
            <Input />
            {
                images.length > 0
                    ? <div className="gallery__images-container"> { images.map(image => <Image source={ image } />) } </div>
                    : <Placeholder text="Your gallery is empty"/>
            }
        </div>
    );
}


export default Gallery;
