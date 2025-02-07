import React, { useEffect } from "react";
import Form from "../components/Form/Form";
import Input from "../components/Input/Input";
import List from "../components/List/List";
import Paginator from "../components/Paginator/Paginator";
import { connect } from "react-redux";
import {
    fetchTodos,
    addTodo,
    changeName,
    editTodo,
} from "../modules/TodoList/actions";
import "./TodoList.css";

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
        div className = "todo-flex_container" >
        <
        h1 className = "todo-header" > Todos List < /h1>{" "} <
        div className = "todo-list" >
        <
        Paginator className = "paginator" / >
        <
        div className = "list-container" >
        <
        List className = "list" / > { " " } <
        Form className = "todo-form"
        name = { name }
        onSubmit = { editId ? editTodo : addTodo } >
        <
        label >
        <
        Input value = { name }
        handleChange = { changeName }
        />{" "} <
        /label>{" "} <
        /Form>{" "} <
        /div>{" "} <
        /div>{" "} <
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