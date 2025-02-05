import { API_TODO } from "../../constant/API_URL";
import { FETCH_TODOS, ADD_TODO, CHANGE_NAME } from "./actionTypes";

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: {
        name,
    },
});

export const fetchTodos = () => async(dispatch) => {
    try {
        const response = await fetch(`${API_TODO}/todos`);
        const data = await response.json();

        dispatch({
            type: FETCH_TODOS,
            payload: {
                data,
            },
        });
    } catch (error) {
        console.error("Ошибка при загрузке задач:", error);
        dispatch({
            type: FETCH_TODOS,
            payload: {
                data: [],
                error: error.message,
            },
        });
    }
};

export const addTodo = (name) => async(dispatch) => {
    try {
        const response = await fetch(`${API_TODO}/todos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
            }),
        });

        const newTodo = await response.json();

        dispatch({
            type: ADD_TODO,
            payload: { todo: newTodo },
        });
    } catch (error) {
        console.error("Ошибка при добавлении задачи:", error);
    }
};