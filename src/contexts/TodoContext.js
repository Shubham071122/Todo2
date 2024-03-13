import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Hii how are you",
            completed: false,
        },
    ],
    addTodo: (id) => { },
    updateTodo: (id,todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { },
});

export const TodoContextProvider = TodoContext.Provider;

export default function useTodo() {
    return useContext(TodoContext);
}
