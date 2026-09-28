import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoParentComponent } from './todoparent.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodoParentComponent', () => {
  let component: TodoParentComponent;
  let fixture: ComponentFixture<TodoParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoParentComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a todo', () => {
    const initialTodoCount = component.todos.length;
    component.addTodo('New Todo');
    expect(component.todos.length).toBe(initialTodoCount + 1);
  });

  it('should remove a todo', () => {
    component.addTodo('Todo to be removed');
    const initialTodoCount = component.todos.length;
    component.removeTodo(component.todos[0]);
    expect(component.todos.length).toBe(initialTodoCount - 1);
  });

  it('should render todos in the template', () => {
    component.addTodo('Todo 1');
    component.addTodo('Todo 2');
    fixture.detectChanges();
    const todoElements = fixture.debugElement.queryAll(By.css('.todo-item'));
    expect(todoElements.length).toBe(2);
  });
});