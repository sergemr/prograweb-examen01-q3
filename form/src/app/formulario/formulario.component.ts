import { Component } from '@angular/core';
import { 
  FormControl,
  FormGroupDirective,
  FormsModule,
  NgForm,
} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
})
export class FormularioComponent {
  formData = {
    nombre: '',
    apellido: '',
    correo: '',
    edad: '',
    identificacion: '',
  };

  onSubmit() {
    console.log(this.formData);
  }
}
