import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { RegistroActasComponent } from './modules/registro-actas/registro-actas.component';
import {getSingleSpaExtraProviders} from "single-spa-angular";
import { provideHttpClient, withFetch } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
//import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [
  {
    path:"registrar",
    component: RegistroActasComponent,
    //canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes),
    { provide: APP_BASE_HREF, useValue: '/actas/' },
    getSingleSpaExtraProviders(),
    provideHttpClient(withFetch()),
  ],
})
export class AppRoutingModule { }
