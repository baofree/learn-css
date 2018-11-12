import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatObjectComponent } from './float-object.component';

describe('FloatObjectComponent', () => {
  let component: FloatObjectComponent;
  let fixture: ComponentFixture<FloatObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
