import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from "src/app/services/users.service";
import { RolTake } from "src/app/shared/rol";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    form: FormGroup;

    constructor(private fb: FormBuilder, public router: Router, private userService: UsersService, private rol: RolTake) {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    logIn() {
        if (!this.form.valid) {
            console.log('Datos erroneos')
            return;
        }
        this.userService.get(this.form.value.email, this.form.value.password).subscribe({
            next: (role: any) => {
                if (role) {
                    localStorage.setItem('token', role.role)

                    this.rol.Rol(role.role);
                }
            }
        })
    }
}