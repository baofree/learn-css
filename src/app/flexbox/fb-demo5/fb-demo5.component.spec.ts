import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbDemo5Component } from './fb-demo5.component';

describe('FbDemo5Component', () => {
  let component: FbDemo5Component;
  let fixture: ComponentFixture<FbDemo5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbDemo5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbDemo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
