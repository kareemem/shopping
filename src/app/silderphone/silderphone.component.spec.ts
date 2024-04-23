import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilderphoneComponent } from './silderphone.component';

describe('SilderphoneComponent', () => {
  let component: SilderphoneComponent;
  let fixture: ComponentFixture<SilderphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SilderphoneComponent]
    });
    fixture = TestBed.createComponent(SilderphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
