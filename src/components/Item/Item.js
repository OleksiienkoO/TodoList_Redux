import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { deleteTodo } from "../../modules/TodoList/actions";
import { connect } from "react-redux";

const Item = ({ item, deleteTodo }) => ( <
    li > { " " } { item.name } { " " } <
    FaRegTrashAlt onClick = {
        () => {
            deleteTodo(item.id);
        }
    }
    />{" "} <
    GoPencil / > { " " } <
    /li>
);
export default connect(null, { deleteTodo })(Item);