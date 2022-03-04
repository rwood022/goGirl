import React, { useState } from "react";

function PlacesTraveledForm(props) {
    const [input, setInput] = useState('');

const handleSubmit = (e) => {
    e.perventDefault();
    }

    props.onSubmit({
        id: Math.random(Math.floor() * 1000),
        text: input,
    });

    setInput('');
    };

// direct user to either the input or the edit form.
return !props.edit ? (
    <div>
        <form className="places-traveled-form" onSubmit={handleSubmit}>
           <input
                type="text"
                placeholder="Add to your places traveled."
                value={input}
                name="text"
                className="places-traveled-input"
                onChange={handleChange}>  
                </input>
        </form>
    </div>
) : (
    <div>
        <h3>Update Places: {props.edit.value}</h3>
        <form className="places-traveled-form" onSubmit={nandleSubmit}>
            <input
                type="text"
                placeholder={props.edit.value}
                value={input}
                name="text"
                className="places=traveled-input"
                onChange={handleChange}
            ></input>    
        <button className="places-traveled-button">Update</button>
        </form>
    </div>
)

export default PlacesTraveledForm;