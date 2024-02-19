import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { FooterPieComponent } from "../footer-pie/footer-pie.component";
@Component({
    selector: 'app-nav-main',
    standalone: true,
    templateUrl: './nav-main.component.html',
    styleUrl: './nav-main.component.css',
    imports: [CommonModule, RouterModule, RouterOutlet, FooterComponent, FooterPieComponent]
})
export class NavMainComponent {

}
