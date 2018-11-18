import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeDiagonalStripesComponent } from './se-diagonal-stripes.component';

describe('SeDiagonalStripesComponent', () => {
  let component: SeDiagonalStripesComponent;
  let fixture: ComponentFixture<SeDiagonalStripesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeDiagonalStripesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeDiagonalStripesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
