import type { Todo } from './Todos';
import './TodoList.css';

type Props = {
  todos: Todo[];
  toggleCompleted: (todo: Todo) => void;
};
export function TodoList({ todos, toggleCompleted }: Props) {
  return (
    <ul className="list-group shadow-sm">
      {todos.map((todo) => (
        <TodoItem
          key={String(todo.todoId)}
          todo={todo}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ul>
  );
}

type TodoProps = {
  todo: Todo;
  toggleCompleted: (todo: Todo) => void;
};
function TodoItem({ todo, toggleCompleted }: TodoProps) {
  const { todoId, task, isCompleted } = todo;
  const idAttr = `todo-item-${todoId}`;
  const taskClass = isCompleted
    ? 'form-check-label is-completed'
    : 'form-check-label';
  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          id={idAttr}
          type="checkbox"
          checked={isCompleted}
          className="form-check-input mr-2"
          onChange={() => toggleCompleted(todo)}
        />
        <label className={taskClass} htmlFor={idAttr}>
          {task}
        </label>
      </div>
    </li>
  );
}
