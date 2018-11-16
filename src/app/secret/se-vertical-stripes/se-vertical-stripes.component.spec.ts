import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeVerticalStripesComponent } from './se-vertical-stripes.component';

describe('SeVerticalStripesComponent', () => {
  let component: SeVerticalStripesComponent;
  let fixture: ComponentFixture<SeVerticalStripesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeVerticalStripesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeVerticalStripesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
