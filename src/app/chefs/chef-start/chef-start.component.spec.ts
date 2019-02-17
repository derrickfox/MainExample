import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefStartComponent } from './chef-start.component';

describe('ChefStartComponent', () => {
  let component: ChefStartComponent;
  let fixture: ComponentFixture<ChefStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
