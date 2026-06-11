import { v4 as uuidv4 } from "uuid";

export default function todosReducer(currentTodos, action) {
  if (action.type === "add") {
    return [
      ...currentTodos,
      {
        id: `${uuidv4()}`,
        value: `${action.payload.todoTextValue}`,
        isCompleted: false,
      },
    ];
  } else if (action.type === "check") {
    return currentTodos.map((t) =>
      t.id === action.payload.todo.id
        ? { ...t, isCompleted: !t.isCompleted }
        : t,
    );
  } else if (action.type === "edit") {
    return currentTodos.map((t) =>
      t.id === action.payload.todo.id
        ? { ...t, value: action.payload.editValue }
        : t,
    );
  } else if (action.type === "delete") {
    return currentTodos.filter((t) => t.id !== action.payload.todo.id);
  }

  return currentTodos;
}
