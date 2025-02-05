import { connect } from "react-redux";
import Item from "../Item/Item";

const List = ({ items }) => ( <
    ul > { " " } {
        items.map((item) => ( <
            Item key = { item.id }
            item = { item }
            />
        ))
    } { " " } <
    /ul>
);

const mapStateToProps = (state) => ({
    items: state.todos.data,
});

export default connect(mapStateToProps)(List);