import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FormularioComponent } from './formulario/formulario.component';
import {HoeComponent } from './hoe/hoe.component';
const routes: Routes = [

{path: 'formulario', component: FormularioComponent},
{path: 'home', component: HoeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
