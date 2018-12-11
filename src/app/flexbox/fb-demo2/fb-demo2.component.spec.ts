import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbDemo2Component } from './fb-demo2.component';

describe('FbDemo2Component', () => {
  let component: FbDemo2Component;
  let fixture: ComponentFixture<FbDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
