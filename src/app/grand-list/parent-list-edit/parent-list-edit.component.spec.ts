import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentListEditComponent } from './parent-list-edit.component';

describe('ListEditComponent', () => {
  let component: ParentListEditComponent;
  let fixture: ComponentFixture<ParentListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
