import React from "react";
import "./Form.css";

const Form = ({ children, onSubmit, name, className }) => {
    const addOnSubmit = (e) => {
        e.preventDefault();
        onSubmit(name);
    };

    return ( <
        form className = { className }
        onSubmit = { addOnSubmit } > { " " } { children } < input className = "form-submit"
        type = "submit" / >
        <
        /form>
    );
};
export default Form;