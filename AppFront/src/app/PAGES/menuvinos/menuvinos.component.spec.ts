import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuvinosComponent } from './menuvinos.component';

describe('MenuvinosComponent', () => {
  let component: MenuvinosComponent;
  let fixture: ComponentFixture<MenuvinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuvinosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuvinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
