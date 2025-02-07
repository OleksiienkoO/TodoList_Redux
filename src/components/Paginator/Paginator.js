import { connect } from "react-redux";
import { setPage } from "../../modules/TodoList/actions";
import "./Paginator.css";

const Paginator = ({
    curentPage,
    setPage,
    totalItems,
    itemsPerPage,
    className,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return ( <
        div className = { className } >
        <
        button className = "paginator-button paginator-font"
        onClick = {
            () => setPage(curentPage - 1) }
        disabled = { curentPage === 1 } >
        Previous { " " } <
        /button>{" "} <
        span className = "paginator-font" > { " " } { curentPage }
        / {totalPages}{" "} <
        /span>{" "} <
        button className = "paginator-button paginator-font"
        onClick = {
            () => setPage(curentPage + 1) }
        disabled = { curentPage === totalPages } >
        Next { " " } <
        /button>{" "} <
        /div>
    );
};

const mapStateToProps = (state) => ({
    curentPage: state.todos.curentPage,
    totalItems: state.todos.data.length,
    itemsPerPage: state.todos.itemsPerPage,
});

export default connect(mapStateToProps, { setPage })(Paginator);