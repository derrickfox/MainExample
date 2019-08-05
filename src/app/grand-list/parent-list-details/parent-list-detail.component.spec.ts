import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentListDetailComponent } from './parent-list-detail.component';

describe('ParentListDetailComponent', () => {
  let component: ParentListDetailComponent;
  let fixture: ComponentFixture<ParentListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
