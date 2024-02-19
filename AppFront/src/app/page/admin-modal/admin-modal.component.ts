import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AdminService } from '../../Servicios/admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-modal',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './admin-modal.component.html',
  styleUrl: './admin-modal.component.css',
})
export class AdminModalComponent {
  registerForm: any;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private adminService: AdminService, private router: Router) {
    this.registerForm = new FormGroup({
      full_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern
      (this.emailPattern)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      role: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
    const register = this.adminService.register(this.registerForm.value).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/admin'])
        },
        error => {
          console.log(error);
        }
      );
    console.log(register);
  }

  onResetForm() {
    this.registerForm.reset();
  }

  onSaveForm() {
    if (this.registerForm.valid) {
      this.onResetForm();
      console.log("Valido");
    }else {
      console.log("No valido");
    }
  }

  get full_name() { return this.registerForm.get('full_name');}
  get email() { return this.registerForm.get('email');}
  get password() { return this.registerForm.get('password');}
  get phone() { return this.registerForm.get('phone');}
  get role() { return this.registerForm.get('role');}
}
