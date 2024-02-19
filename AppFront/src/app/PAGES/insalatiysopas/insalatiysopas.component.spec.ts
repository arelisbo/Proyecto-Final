import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsalatiysopasComponent } from './insalatiysopas.component';

describe('InsalatiysopasComponent', () => {
  let component: InsalatiysopasComponent;
  let fixture: ComponentFixture<InsalatiysopasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsalatiysopasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsalatiysopasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
