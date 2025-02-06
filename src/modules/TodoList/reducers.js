import { FETCH_TODOS, ADD_TODO, CHANGE_NAME, DELETE_TODO } from "./actionTypes";

const initialState = {
    data: [],
    name: "",
    id: "",
    reloader: false,
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
        default:
            return state;
    }
};

export default todos;