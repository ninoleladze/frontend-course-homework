export class TodoParentComponent {
    todos: { id: number, title: string, completed: boolean }[] = [];
    nextId: number = 1;

    addTodo(title: string): void {
        if (title) {
            this.todos.push({ id: this.nextId++, title: title, completed: false });
        }
    }

    removeTodo(id: number): void {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
}