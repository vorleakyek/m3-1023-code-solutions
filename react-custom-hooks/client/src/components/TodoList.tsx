import type { Todo } from './useTodos';
import './TodoList.css';

type Props = {
  todos: Todo[];
  toggleCompleted: (todoId: number) => void;
};
export function TodoList({ todos, toggleCompleted }: Props) {
  return (
    <ul className="list-group shadow-sm">
      {todos.map((todo) => (
        <TodoCard
          key={todo.todoId}
          todo={todo}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ul>
  );
}

type CardProps = {
  todo: Todo;
  toggleCompleted: (todoId: number) => void;
};
function TodoCard({ todo, toggleCompleted }: CardProps) {
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
          onChange={() => toggleCompleted(todoId)}
        />
        <label className={taskClass} htmlFor={idAttr}>
          {task}
        </label>
      </div>
    </li>
  );
}
