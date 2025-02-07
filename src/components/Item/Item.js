import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { deleteTodo, setEditId } from "../../modules/TodoList/actions";
import { connect } from "react-redux";
import "./Item.css";

const Item = ({ item, deleteTodo, setEditId }) => ( <
    li className = "todo-item" > { " " } { item.name } { " " } <
    div className = "item-editor" > { " " } <
    FaRegTrashAlt onClick = {
        () => {
            deleteTodo(item.id);
        }
    }
    />{" "} <
    GoPencil onClick = {
        () => {
            setEditId(item.id, item.name);
        }
    }
    /> <
    /div>{" "} <
    /li>
);

export default connect(null, { deleteTodo, setEditId })(Item);