import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormulariofooterComponent } from '../formulariofooter/formulariofooter.component';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormulariofooterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() title:String = "soy el titulo"
}
