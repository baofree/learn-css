import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgBoxModelComponent } from './bg-box-model.component';

describe('BgBoxModelComponent', () => {
  let component: BgBoxModelComponent;
  let fixture: ComponentFixture<BgBoxModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgBoxModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgBoxModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
