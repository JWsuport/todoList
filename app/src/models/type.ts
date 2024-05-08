type Item = {
  id: string;
  title: string;
  isChecked: boolean;
};

interface TodoRowProps {
  item: Item;
  updateMemeber: () => void;
  deleteMemeber: () => void;
}

interface TodoAddProps {
  inputItem: string;
  setInputItem: (e: string) => void;
  createMember: () => void;
}

interface TodoTableProps {
  todoList: Item[];
  updateMemeber: (Item: Item) => void;
  deleteMemeber: (id: string) => void;
}

interface TodoStoreTypes {
  todoList: Item[];
  inputItem: string;
  setTodoList: (todoList: Item[]) => void;
  setInputItem: (inputItem: string) => void;
}

export type {
  TodoRowProps,
  Item,
  TodoAddProps,
  TodoTableProps,
  TodoStoreTypes,
};
