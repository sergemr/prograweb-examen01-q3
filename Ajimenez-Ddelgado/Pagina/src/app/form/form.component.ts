import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,FormsModule,MatSlideToggleModule,MatButtonModule, MatDividerModule, MatIconModule],

})
export class FormComponent {
  formData = {
    usuario:'',
    correo: '',
    clave:'',
  }

  onSubmit(){
    console.log(this.formData); 
    this.formData={
      usuario:'',
      correo:'',
      clave:''
    };
  }
}
