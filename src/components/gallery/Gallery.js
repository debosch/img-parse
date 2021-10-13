import Input from "../input/Input";
import Image from "../Image/Image";
import { useDispatch, useSelector } from "react-redux";

import './gallery.scss';

//<Image source="https://via.placeholder.com/300x400"/>
const Gallery = () => {
    const dispatch = useDispatch();
    const images = useSelector(state => state.images);

    return (
        <div className="gallery">
            <Input />
            <div className="gallery__images-container">
                { images.length > 0 
                ? images.map(image => <Image source={ image } />)
                : <div>Empty array</div> }
            </div>
        </div>
    );
}


export default Gallery;