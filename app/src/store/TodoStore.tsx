import { create } from "zustand";
import { TodoStoreTypes } from "../models/type";

const TodoStore = create<TodoStoreTypes>((set) => ({
  todoList: [],
  setTodoList: (todoList) => set({ todoList }),
  inputItem: "",
  setInputItem: (inputItem) => set({ inputItem }),
}));

export default TodoStore;
