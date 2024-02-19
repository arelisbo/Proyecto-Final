import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPieComponent } from './footer-pie.component';

describe('FooterPieComponent', () => {
  let component: FooterPieComponent;
  let fixture: ComponentFixture<FooterPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterPieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
