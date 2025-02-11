import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TodoList from "./pages/TodoList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import store from "./store";
import ColorPanel from "./components/ColorPanel/ColorPanel";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <
    Provider store = { store } >
    <
    div className = "components-container" > { " " } <
    ColorPanel / >
    <
    TodoList / >
    <
    /div> <
    /Provider>
);