import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'forms', component: FormsComponent},
  {path:'', redirectTo:'/forms', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
