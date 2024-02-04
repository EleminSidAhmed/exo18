import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRefsComponent } from './list-refs.component';

describe('ListRefsComponent', () => {
  let component: ListRefsComponent;
  let fixture: ComponentFixture<ListRefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRefsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListRefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
