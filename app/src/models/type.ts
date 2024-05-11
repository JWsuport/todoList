type Item = {
  id: string;
  title: string;
  isChecked: boolean;
};

interface TodoStoreTypes {
  todoList: Item[];
  inputItem: string;
  setTodoList: (todoList: Item[]) => void;
  setInputItem: (inputItem: string) => void;
  getMember: () => void;
  createMember: () => void;
  deleteMember: (todo: Item) => void;
  updateMember: (todo: Item) => void;
}

export type { Item, TodoStoreTypes };
