import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W3CssRoundedCornersComponent } from './w3-css-rounded-corners.component';

describe('W3CssRoundedCornersComponent', () => {
  let component: W3CssRoundedCornersComponent;
  let fixture: ComponentFixture<W3CssRoundedCornersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W3CssRoundedCornersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W3CssRoundedCornersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
