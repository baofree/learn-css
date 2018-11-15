import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W3BoxShadowComponent } from './w3-box-shadow.component';

describe('W3BoxShadowComponent', () => {
  let component: W3BoxShadowComponent;
  let fixture: ComponentFixture<W3BoxShadowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W3BoxShadowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W3BoxShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
