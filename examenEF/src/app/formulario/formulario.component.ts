import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import{

  FormControl,
  FormGroupDirective,
  FormsModule,
  NgForm,
  
  } from '@angular/forms'


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule,MatDividerModule],
})
export class FormularioComponent {
  formData = {
  Nombre: '',
  Apellido:'',
  Correo: '',
  Edad:0,
  Cedula: ''

}
onSubmit() {
  console.log(this.formData);
  
}

}

