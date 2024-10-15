class TodoEntity {
  id: number;
  title: string;
  completed: boolean;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.completed = false;
  }
}

const todos: TodoEntity[] = [
  new TodoEntity(1, "Learn TypeScript"),
  new TodoEntity(2, "Learn NestJS"),
  new TodoEntity(3, "Learn GraphQL"),
  new TodoEntity(4, "Learn React"),
  new TodoEntity(5, "Learn Angular"),
];

export { TodoEntity, todos };
