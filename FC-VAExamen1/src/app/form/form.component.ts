import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-form',
  templateUrl:'./form.component.html',
  styleUrls: ['./form.component.css'],
  standalone:true, 
  imports:[FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule]
})
export class FormComponent {

  formData={
    nombre:'',
    apellido:'',
    correo:'',
    edad:'',
    id:''

  };

  onSubmit(){
    console.log(this.formData); 
    this.formData={
    nombre:'',
    apellido:'',
    correo:'',
    edad:'',
    id:''
    };
  }
}