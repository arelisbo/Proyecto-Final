import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupizzasComponent } from './menupizzas.component';

describe('MenupizzasComponent', () => {
  let component: MenupizzasComponent;
  let fixture: ComponentFixture<MenupizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenupizzasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenupizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
