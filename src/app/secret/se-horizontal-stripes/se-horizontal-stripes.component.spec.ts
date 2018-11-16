import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeHorizontalStripesComponent } from './se-horizontal-stripes.component';

describe('SeHorizontalStripesComponent', () => {
  let component: SeHorizontalStripesComponent;
  let fixture: ComponentFixture<SeHorizontalStripesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeHorizontalStripesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeHorizontalStripesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
