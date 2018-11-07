import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W3CssDropdownsComponent } from './w3-css-dropdowns.component';

describe('W3CssDropdownsComponent', () => {
  let component: W3CssDropdownsComponent;
  let fixture: ComponentFixture<W3CssDropdownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W3CssDropdownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W3CssDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
