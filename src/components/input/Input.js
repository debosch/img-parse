import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { ADD_IMAGE } from '../../actions/types';

import './input.scss';

const Input = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();

        dispatch({ type: ADD_IMAGE, payload: input});
        setInput("");
    }

    function handleChange(e) {
        setInput(e.target.value);
    }

    return (
        <form className="url-form" action="none" onSubmit={ (e) => handleSubmit(e) }>
            <input value={ input } onChange={ (e) => handleChange(e) } type="text" className="url-form__input" placeholder="Insert URL..." />
            <button type="submit" className="url-form__submit-button">
                <p className="url-form__submit-button-text">Add</p>
            </button>
        </form>
    );
};


export default Input;