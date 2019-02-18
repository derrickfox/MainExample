import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientStartComponent } from './ingredient-start.component';

describe('IngredientStartComponent', () => {
  let component: IngredientStartComponent;
  let fixture: ComponentFixture<IngredientStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
