import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgPositionComponent } from './bg-position.component';

describe('BgPositionComponent', () => {
  let component: BgPositionComponent;
  let fixture: ComponentFixture<BgPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
