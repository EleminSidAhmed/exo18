import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireRefsComponent } from './formulaire-refs.component';

describe('FormulaireRefsComponent', () => {
  let component: FormulaireRefsComponent;
  let fixture: ComponentFixture<FormulaireRefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireRefsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireRefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
