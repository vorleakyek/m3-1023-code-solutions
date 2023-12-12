import { useEffect, useState } from 'react';

export type UnsavedTodo = {
  task: string;
  isCompleted: boolean;
};
export type Todo = UnsavedTodo & {
  todoId: number;
};

export type UseTodosValues = {
  isLoading: boolean;
  error?: unknown;
  todos?: Todo[];
  addTodo: (todo: UnsavedTodo) => Promise<void>;
  toggleCompleted: (todoId: number) => Promise<void>;
};
/**
 * Manages the Todos by reading from and writing to the backend API,
 * using the API functions below.
 */
export function useTodos(): UseTodosValues {
  const [todos, setTodos] = useState<Todo[]>();
  const [error, setError] = useState<unknown>();
  useEffect(() => {
    /* TODO: If `todos` hasn't been defined yet, read the items from the API
     * and set them into the `todos` state.
     */

    async function getTodo() {
      try {
        if (!todos) {
          const todoArr = await readTodos();
          setTodos(todoArr);
        }
      } catch (err) {
        setError(err);
      }
    }

    getTodo();
  }, [todos]);

  async function addTodo(newTodo: UnsavedTodo): Promise<void> {
    /* TODO: Call the API function that creates a Todo item.
     * When the promise returned by that function resolves, update the `todos` state.
     * Note that it is critical that you pass a _new_ array. Do not modify the `todos` array.
     */
    try {
      const newObject = await createTodo(newTodo);
      const updatedArray = todos?.concat(newObject);
      setTodos(updatedArray);
    } catch (err) {
      setError(err);
    }
  }

  async function toggleCompleted(todoId: number): Promise<void> {
    /* TODO: Find the Todo item being updated, toggle its completed prop, and call
     * the API function that updates a Todo item.
     * When the promise returned by that function resolves, update the `todos` state.
     * When updating this state, use the updated `todo` returned from the API.
     * Note that it is critical that you pass a _new_ array. Do not modify the `todos` array.
     */
    try {

      if(!todos) {
        throw new Error('todos does not exist');
      }

      const todo = todos.find(obj=>obj.todoId === todoId);

      if(!todo) {
        throw new Error('todoId does not exist');
      }

      todo.isCompleted = !todo.isCompleted;

      const updatedObj = await updateTodo(todo);

      const updatedArr = todos?.map((obj) => {
        if (obj.todoId === todoId) {
          obj = updatedObj;
        }
        return obj;
      });

      setTodos(updatedArr);

    } catch (err) {
      setError(err);
    }

  }

  return {
    isLoading: todos === undefined && error === undefined,
    error,
    todos,
    addTodo,
    toggleCompleted,
  };
}

/**
 * Reads all To Do items from the API.
 * @returns Promise that resolves with the read items.
 */
async function readTodos(): Promise<Todo[]> {
  const res = await fetch('/api/todos');
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Creates a new To Do item using the API.
 * @param todo The To Do to create.
 * @returns Promise that resolves with the new item returned from the API.
 */
async function createTodo(todo: UnsavedTodo): Promise<Todo> {
  const req = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  };
  const res = await fetch('/api/todos', req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Updates a To Do item using the API by setting its `isCompleted` state.
 * @param todo The To Do to update.
 * @returns Promise that resolves with the updated To Do item.
 */
async function updateTodo(todo: Todo): Promise<Todo> {
  const req = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isCompleted: todo.isCompleted }),
  };
  const res = await fetch(`/api/todos/${todo.todoId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
