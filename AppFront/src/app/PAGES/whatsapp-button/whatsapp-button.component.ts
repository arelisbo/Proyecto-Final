import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.css'
})
export class WhatsappButtonComponent {

  abrirWhatsApp(): void {
    const numero = "+573162402765"; // Reemplaza esto con el número deseado
    const mensaje = "Hola, me gustaria realizar una reserva";
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(link);
  }

}
