import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbDemo3Component } from './fb-demo3.component';

describe('FbDemo3Component', () => {
  let component: FbDemo3Component;
  let fixture: ComponentFixture<FbDemo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbDemo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
