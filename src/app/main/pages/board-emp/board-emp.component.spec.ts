import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardEmpComponent } from './board-emp.component';

describe('BoardEmpComponent', () => {
  let component: BoardEmpComponent;
  let fixture: ComponentFixture<BoardEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
