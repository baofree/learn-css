import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeHalfEllipseComponent } from './se-half-ellipse.component';

describe('SeHalfEllipseComponent', () => {
  let component: SeHalfEllipseComponent;
  let fixture: ComponentFixture<SeHalfEllipseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeHalfEllipseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeHalfEllipseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
