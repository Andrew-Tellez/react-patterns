import { TodoEntity } from "../../entities/Todo.entity";
import { Todo } from "./todo";
import "./todoList.css";
interface TodoListProps {
  items: TodoEntity[];
  onComplete: (id: number) => void;
  itemsCompleted: number;
  totalItems: number;
}

export function TodoList(props: TodoListProps) {
  const { items, onComplete, itemsCompleted, totalItems } = props;
  return (
    <>
      <div>
        {itemsCompleted} of {totalItems} completed
      </div>
      <div className="todoList">
        {items.map((item) => (
          <Todo key={item.id} {...item} onCompleted={onComplete} />
        ))}
      </div>
    </>
  );
}
