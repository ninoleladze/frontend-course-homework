import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'niniko';

  interface Todo {
      id: number;
      text: string;
      completed: boolean;
  }

  class TodoApp {
      private todos: Todo[] = [];
      private todoIdCounter: number = 1;

      constructor() {
          this.loadTodos();
          this.setupEventListeners();
          this.render();
      }

      private setupEventListeners() {
          const input = document.getElementById('todoInput') as HTMLInputElement;
          input.addEventListener('keypress', (e) => {
              if (e.key === 'Enter') {
                  this.addTodo();
              }
          });
      }

      addTodo() {
          const input = document.getElementById('todoInput') as HTMLInputElement;
          const text = input.value.trim();

          if (text) {
              this.todos.push({
                  id: this.todoIdCounter++,
                  text,
                  completed: false
              });
              input.value = '';
              this.saveTodos();
              this.render();
          }
      }

      toggleTodo(id: number) {
          this.todos = this.todos.map(todo => 
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
          );
          this.saveTodos();
          this.render();
      }

      deleteTodo(id: number) {
          this.todos = this.todos.filter(todo => todo.id !== id);
          this.saveTodos();
          this.render();
      }

      private saveTodos() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
      }

      private loadTodos() {
          const storedTodos = localStorage.getItem('todos');
          if (storedTodos) {
              this.todos = JSON.parse(storedTodos);
              if (this.todos.length > 0) {
                  this.todoIdCounter = Math.max(...this.todos.map(t => t.id)) + 1;
    }
    }

      render() {
          const todoList = document.getElementById('todoList')!;
          todoList.innerHTML = '';

          this.todos.forEach(todo => {
              const todoItem = document.createElement('div');
              todoItem.className = 'todo-item';

              const checkbox = document.createElement('input');
              checkbox.type = 'checkbox';
              checkbox.checked = todo.completed;
              checkbox.onchange = () => this.toggleTodo(todo.id);

              const textSpan = document.createElement('span');
              textSpan.textContent = todo.text;
              textSpan.className = todo.completed ? 'completed' : '';

              const deleteBtn = document.createElement('button');
              deleteBtn.textContent = 'Delete';
              deleteBtn.className = 'delete-btn';
              deleteBtn.onclick = () => this.deleteTodo(todo.id);

              todoItem.appendChild(checkbox);
              todoItem.appendChild(textSpan);
              todoItem.appendChild(deleteBtn);

              todoList.appendChild(todoItem);
          });
      }
  }

  // Initialize the app
  const app = new TodoApp();
}
}
}
