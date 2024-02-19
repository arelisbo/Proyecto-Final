import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariofooterComponent } from './formulariofooter.component';

describe('FormulariofooterComponent', () => {
  let component: FormulariofooterComponent;
  let fixture: ComponentFixture<FormulariofooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariofooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulariofooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
