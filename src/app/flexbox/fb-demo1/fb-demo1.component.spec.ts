import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbDemo1Component } from './fb-demo1.component';

describe('FbDemo1Component', () => {
  let component: FbDemo1Component;
  let fixture: ComponentFixture<FbDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
