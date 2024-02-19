import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupostresComponent } from './menupostres.component';

describe('MenupostresComponent', () => {
  let component: MenupostresComponent;
  let fixture: ComponentFixture<MenupostresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenupostresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenupostresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
