import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{FormComponent}from'./form/form.component'; 
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:"form", component:FormComponent},
  {path:"home", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
