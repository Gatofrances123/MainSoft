import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFacturaComponent } from './todo-factura.component';

describe('TodoFacturaComponent', () => {
  let component: TodoFacturaComponent;
  let fixture: ComponentFixture<TodoFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
