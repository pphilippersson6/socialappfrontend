import React from 'react';
import "../styles/Form.css";

function Input({type, name, label}){
    return (
        <div className="input">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} id={name} />
        </div>
    )
}

export default function Form({title, handleSubmit, children}) {
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <h1 className="form-heading">{title}</h1>
                { children.map((child , index) => {
                    return (
                        <Input
                            key={index}
                            type={child.type}
                            name={child.name}
                            label={child.label}
                        />
                    )
                })}

                <input type="submit" value="Submit"/>

            </form>
        </div>
    )
}
