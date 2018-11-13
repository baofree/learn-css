import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgGridComponent } from './bg-grid.component';

describe('BgGridComponent', () => {
  let component: BgGridComponent;
  let fixture: ComponentFixture<BgGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
