import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-formulariofooter',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './formulariofooter.component.html',
  styleUrl: './formulariofooter.component.css'
})
export class FormulariofooterComponent {
  @Input() title:String = "soy el titulo"
  @Input() description: String = "Descripcion generica"
  @Input() style_button: String = "btn btn-secondary"
}
