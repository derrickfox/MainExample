import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentListStartComponent } from './parent-list-start.component';

describe('ParentListStartComponent', () => {
  let component: ParentListStartComponent;
  let fixture: ComponentFixture<ParentListStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentListStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentListStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
