import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeNativeModalComponent } from './se-native-modal.component';

describe('SeNativeModalComponent', () => {
  let component: SeNativeModalComponent;
  let fixture: ComponentFixture<SeNativeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeNativeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeNativeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
