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
          bfrIsChecked: true, // 시작전
          ingIsChecked: false, // 진행중
          fnsIsChecked: false, // 완료
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

  bfrUpdateMember: async (todo) => {
    const { getMember } = TodoStore.getState();
    await fetch("http://localhost:3001/todoList/" + todo.id, {
      method: "PATCH",
      body: JSON.stringify({
        bfrIsChecked: !todo.bfrIsChecked,
        ingIsChecked: false,
        fnsIsChecked: false,
      }),
    });
    getMember();
  },

  ingUpdateMember: async (todo) => {
    const { getMember } = TodoStore.getState();
    await fetch("http://localhost:3001/todoList/" + todo.id, {
      method: "PATCH",
      body: JSON.stringify({
        bfrIsChecked: false,
        ingIsChecked: !todo.ingIsChecked,
        fnsIsChecked: false,
      }),
    });
    getMember();
  },

  fnsUpdateMember: async (todo) => {
    const { getMember } = TodoStore.getState();
    await fetch("http://localhost:3001/todoList/" + todo.id, {
      method: "PATCH",
      body: JSON.stringify({
        bfrIsChecked: false,
        ingIsChecked: false,
        fnsIsChecked: !todo.fnsIsChecked,
      }),
    });
    getMember();
  },
}));

export default TodoStore;
