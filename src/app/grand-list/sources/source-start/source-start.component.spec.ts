import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceStartComponent } from './source-start.component';

describe('SourceStartComponent', () => {
  let component: SourceStartComponent;
  let fixture: ComponentFixture<SourceStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
