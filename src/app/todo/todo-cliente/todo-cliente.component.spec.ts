import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoClienteComponent } from './todo-cliente.component';

describe('TodoClienteComponent', () => {
  let component: TodoClienteComponent;
  let fixture: ComponentFixture<TodoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
