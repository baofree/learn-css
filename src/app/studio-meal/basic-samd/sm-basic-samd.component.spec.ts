import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmBasicSamdComponent } from './sm-basic-samd.component';

describe('SmBasicSamdComponent', () => {
  let component: SmBasicSamdComponent;
  let fixture: ComponentFixture<SmBasicSamdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmBasicSamdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmBasicSamdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
