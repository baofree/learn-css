import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeMultipleBorderComponent } from './se-multiple-border.component';

describe('SeMultipleBorderComponent', () => {
  let component: SeMultipleBorderComponent;
  let fixture: ComponentFixture<SeMultipleBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeMultipleBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeMultipleBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
