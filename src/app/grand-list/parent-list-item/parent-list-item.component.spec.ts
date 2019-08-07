import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentListItemComponent } from './parent-list-item.component';

describe('ParentListItemComponent', () => {
  let component: ParentListItemComponent;
  let fixture: ComponentFixture<ParentListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
