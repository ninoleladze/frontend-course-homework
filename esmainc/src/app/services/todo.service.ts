export class TodoService {
    private todos: { id: number; title: string; completed: boolean }[] = [];
    private nextId: number = 1;

    getTodos() {
        return this.todos;
    }

    addTodo(title: string) {
        const newTodo = { id: this.nextId++, title, completed: false };
        this.todos.push(newTodo);
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    toggleTodoCompletion(id: number) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }
}