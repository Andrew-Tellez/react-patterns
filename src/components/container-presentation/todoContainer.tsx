import { useState, useEffect, useMemo } from "react";
import { TodoList } from "./todoList";
import { TodoEntity, todos } from "../../entities/Todo.entity";

export function TodoContainer() {
  const [items, setItems] = useState<TodoEntity[]>([]);

  useEffect(() => {
    //Obtener y asignar datos
    setItems(todos);
  }, []);

  /**
   * Cambia el estado de completed
   * @param {number} id
   */
  function handleComplete(id: number) {
    const index = items.findIndex((item) => item.id === id);
    items[index].completed = !items[index].completed;
    setItems([...items]);
  }

  const itemsCompleted = useMemo(() => {
    return items.filter((item) => item.completed).length;
  }, [items]);

  return (
    <TodoList
      items={items}
      onComplete={handleComplete}
      itemsCompleted={itemsCompleted}
      totalItems={items.length}
    />
  );
}
