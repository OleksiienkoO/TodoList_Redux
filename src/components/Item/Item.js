import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { deleteTodo, setEditId } from "../../modules/TodoList/actions";
import { connect } from "react-redux";

const Item = ({ item, deleteTodo, setEditId }) => ( <
    li > { " " } { item.name } { " " } <
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
    />{" "} <
    /li>
);

export default connect(null, { deleteTodo, setEditId })(Item);