import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeTranslucenceBorderComponent } from './se-translucence-border.component';

describe('SeTranslucenceBorderComponent', () => {
  let component: SeTranslucenceBorderComponent;
  let fixture: ComponentFixture<SeTranslucenceBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeTranslucenceBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeTranslucenceBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
