import React from "react";

const Form = ({ children, onSubmit, name }) => {
    const addOnSubmit = (e) => {
        e.preventDefault();
        onSubmit(name);
    };

    return ( <
        form onSubmit = { addOnSubmit } > { " " } { children } < input type = "submit" / >
        <
        /form>
    );
};
export default Form;