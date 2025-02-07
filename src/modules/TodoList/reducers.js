import {
    FETCH_TODOS,
    ADD_TODO,
    CHANGE_NAME,
    DELETE_TODO,
    SET_EDIT_ID,
    EDIT_TODO,
    SET_PAGE,
} from "./actionTypes";

const initialState = {
    data: [],
    name: "",
    id: "",
    reloader: false,
    editId: null,
    curentPage: 1,
    itemsPerPage: 10,
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            {
                const { data } = action.payload;
                return {...state, data, reloader: true };
            }
        case ADD_TODO:
            {
                const newTodo = { name: state.name };
                return {
                    ...state,
                    data: [...state.data, newTodo],
                    name: "",
                };
            }
        case CHANGE_NAME:
            {
                return {
                    ...state,
                    name: action.payload.name,
                };
            }
        case DELETE_TODO:
            {
                return {...state, reloader: false };
            }
        case SET_EDIT_ID:
            {
                const { editId, editName } = action.payload;
                return {...state, editId, name: editName };
            }
        case EDIT_TODO:
            {
                return {...state, reloader: false, name: "", editId: null };
            }
        case SET_PAGE:
            {
                return {...state, curentPage: action.payload.page };
            }

        default:
            return state;
    }
};

export default todos;