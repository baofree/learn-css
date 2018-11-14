import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmBasicSamdTwoComponent } from './sm-basic-samd-two.component';

describe('SmBasicSamdTwoComponent', () => {
  let component: SmBasicSamdTwoComponent;
  let fixture: ComponentFixture<SmBasicSamdTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmBasicSamdTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmBasicSamdTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
