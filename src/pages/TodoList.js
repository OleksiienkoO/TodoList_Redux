import React, { useEffect } from "react";
import Form from "../components/Form/Form";
import Input from "../components/Input/Input";
import List from "../components/List/List";
import { connect } from "react-redux";
import {
    fetchTodos,
    addTodo,
    changeName,
    editTodo,
} from "../modules/TodoList/actions";

const TodoList = ({
    fetchTodos,
    addTodo,
    name,
    changeName,
    reloader,
    editId,
    editTodo,
}) => {
    useEffect(() => {
        if (!reloader) {
            fetchTodos();
        }
    }, [reloader]);

    return ( <
        div >
        <
        h1 > Todos List < /h1> <List / > { " " } <
        Form name = { name }
        onSubmit = { editId ? editTodo : addTodo } >
        <
        label >
        <
        Input value = { name }
        handleChange = { changeName }
        />{" "} <
        /label>{" "} <
        /Form>{" "} <
        /div>
    );
};

const mapStateToProps = (state) => ({
    name: state.todos.name,
    reloader: state.todos.reloader,
    editId: state.todos.editId,
});

export default connect(mapStateToProps, {
    addTodo,
    fetchTodos,
    changeName,
    editTodo,
})(TodoList);