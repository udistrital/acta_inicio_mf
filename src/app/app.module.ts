import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroActasModule } from './modules/registro-actas/registro-actas.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GestionContractualCrudService } from './services/gestion-contractual-crud.service';
import { TercerosCrudService } from './services/tercero-crud.service';
import { UserService } from './services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistroActasModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [
    GestionContractualCrudService,
    TercerosCrudService,
    UserService

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }