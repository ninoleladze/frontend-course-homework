export class TodoItemComponent {
    @Input() todo: { id: number; title: string; completed: boolean };
    @Output() delete = new EventEmitter<number>();
    @Output() toggleComplete = new EventEmitter<number>();

    onDelete() {
        this.delete.emit(this.todo.id);
    }

    onToggleComplete() {
        this.toggleComplete.emit(this.todo.id);
    }
}