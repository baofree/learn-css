import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeDimmingBoxShadowComponent } from './se-dimming-box-shadow.component';

describe('SeDimmingBoxShadowComponent', () => {
  let component: SeDimmingBoxShadowComponent;
  let fixture: ComponentFixture<SeDimmingBoxShadowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeDimmingBoxShadowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeDimmingBoxShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
