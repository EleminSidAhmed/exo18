import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMarqueComponent } from './form-marque.component';

describe('FormMarqueComponent', () => {
  let component: FormMarqueComponent;
  let fixture: ComponentFixture<FormMarqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormMarqueComponent]
    });
    fixture = TestBed.createComponent(FormMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
