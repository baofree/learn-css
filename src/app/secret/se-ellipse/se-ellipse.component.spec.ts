import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeEllipseComponent } from './se-ellipse.component';

describe('SeEllipseComponent', () => {
  let component: SeEllipseComponent;
  let fixture: ComponentFixture<SeEllipseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeEllipseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeEllipseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
