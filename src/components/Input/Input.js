const Input = ({ value, handleChange }) => ( <
    input onChange = {
        (event) => handleChange(event.target.value) }
    type = "text"
    placeholder = "Please enter the name"
    value = { value }
    />
);
export default Input;