import "./todo.css";

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
  onCompleted: (id: number) => void;
}

function Todo(props: TodoProps) {
  const { id, title, completed, onCompleted } = props;
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onCompleted(id)}
      />
      <span>{title}</span>
    </div>
  );
}

export { Todo };
