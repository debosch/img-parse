import Input from "../input/Input";
import Image from "../Image/Image";
import { connect } from "react-redux";

import './gallery.scss';

const mapStateToProps = state => {
    return { images: state.images };
}

const ConnectedGallery = ({ images }) => {
    return (
        <div className="gallery">
            <Input />
            <div className="gallery__images-container">
                <Image source="https://via.placeholder.com/300x400"/>
                <Image source="https://via.placeholder.com/300x400"/>
                <Image source="https://via.placeholder.com/300x400"/>
                <Image source="https://via.placeholder.com/300x400"/>
                <Image source="https://via.placeholder.com/300x400"/>
            </div>
        </div>
    );
}

const Gallery = connect(mapStateToProps)(ConnectedGallery);

export default Gallery;