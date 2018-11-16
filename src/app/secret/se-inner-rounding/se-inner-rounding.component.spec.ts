import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeInnerRoundingComponent } from './se-inner-rounding.component';

describe('SeInnerRoundingComponent', () => {
  let component: SeInnerRoundingComponent;
  let fixture: ComponentFixture<SeInnerRoundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeInnerRoundingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeInnerRoundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
