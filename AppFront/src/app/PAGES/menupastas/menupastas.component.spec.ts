import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupastasComponent } from './menupastas.component';

describe('MenupastasComponent', () => {
  let component: MenupastasComponent;
  let fixture: ComponentFixture<MenupastasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenupastasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenupastasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
