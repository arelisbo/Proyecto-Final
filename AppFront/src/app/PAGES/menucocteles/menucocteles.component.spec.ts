import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucoctelesComponent } from './menucocteles.component';

describe('MenucoctelesComponent', () => {
  let component: MenucoctelesComponent;
  let fixture: ComponentFixture<MenucoctelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenucoctelesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenucoctelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
