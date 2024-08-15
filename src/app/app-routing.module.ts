import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroActasComponent } from './modules/registro-actas/registro-actas.component';

const routes: Routes = [
  {
    path:"registrar-contrato",
    component: RegistroActasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }