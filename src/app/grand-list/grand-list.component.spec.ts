import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandListComponent } from './grand-list.component';

describe('GrandListComponent', () => {
  let component: GrandListComponent;
  let fixture: ComponentFixture<GrandListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
