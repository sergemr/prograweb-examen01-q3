import { Component } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule,NgForm} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule,MatButtonModule],
})

export class FormComponent {
formData = {
  nombre: '',
  apellido: '',
  correo: '',
  edad: '',
  id: '',
};

onSubmit(){
  console.log(this.formData)
}
}