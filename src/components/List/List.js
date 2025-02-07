import { connect } from "react-redux";
import Item from "../Item/Item";

const List = ({ items, className, curentPage, itemsPerPage }) => {
    const startIndex = (curentPage - 1) * itemsPerPage;
    const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

    return ( <
        ul className = { className } > { " " } {
            paginatedItems.map((item) => ( <
                Item key = { item.id }
                item = { item }
                />
            ))
        } { " " } <
        /ul>
    );
};

const mapStateToProps = (state) => ({
    items: state.todos.data,
    itemsPerPage: state.todos.itemsPerPage,
    curentPage: state.todos.curentPage,
});

export default connect(mapStateToProps)(List);