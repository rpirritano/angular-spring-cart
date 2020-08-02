import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSpecialComponent } from './item-special.component';

describe('ItemSpecialComponent', () => {
  let component: ItemSpecialComponent;
  let fixture: ComponentFixture<ItemSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
