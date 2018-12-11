import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbDemo4Component } from './fb-demo4.component';

describe('FbDemo4Component', () => {
  let component: FbDemo4Component;
  let fixture: ComponentFixture<FbDemo4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbDemo4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbDemo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
