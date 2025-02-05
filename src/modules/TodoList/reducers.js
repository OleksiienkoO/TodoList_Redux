import { FETCH_TODOS, ADD_TODO, CHANGE_NAME } from "./actionTypes";

const initialState = {
    data: [],
    name: "",
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            {
                const { data } = action.payload;
                return {...state, data };
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
        default:
            return state;
    }
};

export default todos;