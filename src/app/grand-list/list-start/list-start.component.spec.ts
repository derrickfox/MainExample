import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStartComponent } from './list-start.component';

describe('ListStartComponent', () => {
  let component: ListStartComponent;
  let fixture: ComponentFixture<ListStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
