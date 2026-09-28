import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoItemComponent } from './todoitem.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle completion status', () => {
    component.todo = { id: 1, title: 'Test Todo', completed: false };
    component.toggleCompletion();
    expect(component.todo.completed).toBeTrue();
    component.toggleCompletion();
    expect(component.todo.completed).toBeFalse();
  });

  it('should emit delete event when delete is called', () => {
    spyOn(component.delete, 'emit');
    component.deleteTodo();
    expect(component.delete.emit).toHaveBeenCalledWith(component.todo.id);
  });
});