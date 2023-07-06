import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from  '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      nombre:[''],
      apellido: [''],
      email: [''],
      password: ['']
    }) 
  }

  prueba(){
    console.log(this.form)
  }
}