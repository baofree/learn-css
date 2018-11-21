import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeParallelogramsComponent } from './se-parallelograms.component';

describe('SeParallelogramsComponent', () => {
  let component: SeParallelogramsComponent;
  let fixture: ComponentFixture<SeParallelogramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeParallelogramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeParallelogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
