import { Routes } from '@angular/router';
import { MenuComponent } from './PAGES/menu/menu.component';
import { AdminComponent } from './page/admin/admin.component';
import { HomeComponent } from './page/home/home.component';
import { WhatsappButtonComponent } from './PAGES/whatsapp-button/whatsapp-button.component';
import { AdminModalComponent } from './page/admin-modal/admin-modal.component';
import { RegistroComponent } from './registro/registro.component';
import { ReserveListComponent } from './PAGES/reserve-list/reserve-list.component';
import { loginGuard } from './guards/login.guard';
import { MenuvinosComponent } from './PAGES/menuvinos/menuvinos.component';
import { MenupastasComponent } from './PAGES/menupastas/menupastas.component'; 
import { MenucoctelesComponent } from './PAGES/menucocteles/menucocteles.component';
import { InsalatiysopasComponent } from './PAGES/insalatiysopas/insalatiysopas.component';
import { MenupostresComponent } from './PAGES/menupostres/menupostres.component';
import { MenupizzasComponent } from './PAGES/menupizzas/menupizzas.component';


export const routes: Routes = [
        { path: "menu", component: MenuComponent },
        { path: "Whatsapp", component: WhatsappButtonComponent},
        { path: "insalatiysopas", component: InsalatiysopasComponent},
        { path: "postres", component: MenupostresComponent},
        { path: "admin", component: AdminComponent },
        { path:  "pizzas", component: MenupizzasComponent},
        { path: "cocteles", component: MenucoctelesComponent},
        { path: "vinos", component:MenuvinosComponent},
        { path:  "pastas", component: MenupastasComponent},
        { path: "", component: HomeComponent },
        { path: "modal", component: AdminModalComponent },
        { path: "reserva", component: RegistroComponent },
        { path: "reserve-list/:id", component: ReserveListComponent},
        { path: "reserve-list", component: ReserveListComponent,
        canActivate: [loginGuard]}

];
