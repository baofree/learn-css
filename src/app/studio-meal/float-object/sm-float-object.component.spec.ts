import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmFloatObjectComponent } from './sm-float-object.component';

describe('SmFloatObjectComponent', () => {
  let component: SmFloatObjectComponent;
  let fixture: ComponentFixture<SmFloatObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmFloatObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmFloatObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
