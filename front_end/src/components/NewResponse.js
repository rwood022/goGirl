import React, { useState } from "react";


function validateMessage(message) {
    const re = /^.*(?=.{3,})(?=.*[a-zA-Z]).*$/;
    return re.test(String(message));
}

export default function NewResponse() {

    const[message, setMessage] = useState('');
    const[errorMessage, setErrorMessage ] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "message") {
            setMessage(inputValue);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateMessage(message)) {
            setErrorMessage('Invalid message');
            return;
        }

    };

    return(
        <div className="newReponse">
            <form className="form">
                <input 
                value={message}
                name="newResponse"
                onChange={handleInputChange}
                type="text"
                placeholder="type here"
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
                {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
             </div>
             )}

            </form>
        </div>
    )
}

