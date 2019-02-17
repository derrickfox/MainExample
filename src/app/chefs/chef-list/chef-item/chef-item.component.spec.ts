import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefItemComponent } from './chef-item.component';

describe('ChefItemComponent', () => {
  let component: ChefItemComponent;
  let fixture: ComponentFixture<ChefItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
