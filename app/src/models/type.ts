type Item = {
  id: string;
  title: string;
  bfrIsChecked: boolean; // 시작전
  ingIsChecked: boolean; // 진행중
  fnsIsChecked: boolean; // 완료
};

interface TodoStoreTypes {
  todoList: Item[];
  inputItem: string;
  setTodoList: (todoList: Item[]) => void;
  setInputItem: (inputItem: string) => void;
  getMember: () => void;
  createMember: () => void;
  deleteMember: (todo: Item) => void;
  bfrUpdateMember: (todo: Item) => void;
  ingUpdateMember: (todo: Item) => void;
  fnsUpdateMember: (todo: Item) => void;
}

export type { Item, TodoStoreTypes };
