import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from  '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, public router: Router ){
    this.form = this.fb.group({
      email: [''],
      password: ['']
    }) 
  }

  

  prueba(){
    console.log(this.form)

    this.router.navigate(["/dashboard"])
  }
}
