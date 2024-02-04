import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureFrmComponent } from './voiture-frm.component';

describe('VoitureFrmComponent', () => {
  let component: VoitureFrmComponent;
  let fixture: ComponentFixture<VoitureFrmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoitureFrmComponent]
    });
    fixture = TestBed.createComponent(VoitureFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
