import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";

const Item = ({ item }) => ( <
    li > { " " } { item.name } < FaRegTrashAlt / > < GoPencil / > { " " } <
    /li>
);

export default Item;