import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeBackgroundOriginComponent } from './se-background-origin.component';

describe('SeBackgroundOriginComponent', () => {
  let component: SeBackgroundOriginComponent;
  let fixture: ComponentFixture<SeBackgroundOriginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeBackgroundOriginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeBackgroundOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
