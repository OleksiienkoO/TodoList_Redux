import "./Input.css";

const Input = ({ value, handleChange }) => ( <
    input onChange = {
        (event) => handleChange(event.target.value) }
    type = "text"
    placeholder = "Please enter the name"
    value = { value }
    className = "form-input" /
    >
);
export default Input;