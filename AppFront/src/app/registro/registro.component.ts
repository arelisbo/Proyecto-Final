import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservesService } from '../Servicios/reserve.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})


export class RegistroComponent {
        registerForm:any;
        private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private ReservesService: ReservesService, private router:Router){
    this.registerForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        last_name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.pattern
        (this.emailPattern)]),
        phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
        number_people: new FormControl('', [Validators.required]),
        special_occasions: new FormControl('', [Validators.required]),
        date_reserve: new FormControl('', [Validators.required]),
        hour_reserve: new FormControl('', [Validators.required]),
        info: new FormControl()
    });
}

onSubmit(){
  // console.log(this.registerForm.value)
  const reserve = this.ReservesService.register(this.registerForm.value).subscribe(
    response => {
      console.log(response)
    },
    error => {
      console.log(error)
    }
  )
  console.log(reserve)
}

// onResetForm() {
//   this.registerForm.reset();
// }

// onSaveForm() {
//   if (this.registerForm.valid) {
//     this.onResetForm();
//     console.log("Valido");
//   }else {
//     console.log("No valido");
//   }
// }

  get name() { return this.registerForm.get('name');}
  get last_name() { return this.registerForm.get('last_name');}
  get email() { return this.registerForm.get('email');}
  get phone() { return this.registerForm.get('phone');}
  get number_people() { return this.registerForm.get('number_people');}
  get special_occasions() { return this.registerForm.get('special_occasions');}
  get date_reserve() { return this.registerForm.get('date_reserve');}
  get hour_reserve() { return this.registerForm.get('hour_reserve');}
}
    

