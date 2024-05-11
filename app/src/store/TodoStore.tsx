import { create } from "zustand";
import { TodoStoreTypes } from "../models/type";

const TodoStore = create<TodoStoreTypes>((set) => ({
  todoList: [],
  setTodoList: (todoList) => set({ todoList }),

  inputItem: "",
  setInputItem: (inputItem) => set({ inputItem }),

  getMember: async () => {
    const response = await fetch("http://localhost:3001/todoList", {
      method: "GET",
    });
    const jsonData = await response.json();
    set({ todoList: jsonData });
  },

  createMember: async () => {
    const { inputItem, getMember, setInputItem } = TodoStore.getState(); // TodoStore를 통해 호출
    if (inputItem.trim() !== "") {
      await fetch("http://localhost:3001/todoList", {
        method: "POST",
        body: JSON.stringify({
          key: new Date().toISOString(),
          title: inputItem,
          isChecked: false,
        }),
      });
      await getMember();
      setInputItem("");
    } else {
      alert("할일을 입력해주세요");
    }
  },

  deleteMember: async (todo) => {
    const { getMember } = TodoStore.getState();
    await fetch("http://localhost:3001/todoList/" + todo.id, {
      method: "DELETE",
    });
    getMember();
  },

  updateMember: async (todo) => {
    const { getMember } = TodoStore.getState();
    await fetch("http://localhost:3001/todoList/" + todo.id, {
      method: "PATCH",
      body: JSON.stringify({
        isChecked: !todo.isChecked,
      }),
    });
    getMember();
  },
}));

export default TodoStore;
