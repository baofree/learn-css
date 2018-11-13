import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmFlexComponent } from './sm-flex.component';

describe('SmFlexComponent', () => {
  let component: SmFlexComponent;
  let fixture: ComponentFixture<SmFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
