import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,FormsModule],
})
export class FormularioComponent {
  formData: any = {}; 

  onSubmit() {
    if (this.formData.username && this.formData.apellido && this.formData.email && this.formData.edad && this.formData.cedula) {
      
      console.log(this.formData);

      
      this.formData = {};
    }
  }
  


}
