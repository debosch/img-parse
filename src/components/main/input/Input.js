import { connect } from 'react-redux';
import { addImageUrl } from '../../actions/actions';
import { useState } from 'react';

import './input.scss';

function mapDispatchToProps(dispatch) {
    return {
        addImageUrl: imageUrl => dispatch(addImageUrl(imageUrl))
    };
}

const ConnectedInput = ({ addImageUrl, handleSubmit }) => {
    const [input, setInput] = useState("");

    function handleChange(e) {
        setInput(() => e.target.value);
    }

    return (
        <form className="url-form" action="none" onSubmit={ handleSubmit }>
            <input value={ input } onChange={ handleChange } type="text" className="url-form__input" placeholder="Insert URL..." />
            <button type="submit" className="url-form__submit-button">
                <p className="url-form__submit-button-text">Add</p>
            </button>
        </form>
    );
};

const Input = connect(null, mapDispatchToProps)(ConnectedInput);

export default Input;