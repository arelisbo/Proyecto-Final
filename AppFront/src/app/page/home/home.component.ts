import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMainComponent } from '../nav-main/nav-main.component';
import { FooterComponent } from '../footer/footer.component';
import { FooterPieComponent } from "../footer-pie/footer-pie.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterOutlet, NavMainComponent, FooterComponent, FooterPieComponent]
})
export class HomeComponent {

}
