import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroActasComponent } from './registro-actas.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionContractualCrudService } from 'src/app/services/gestion-contractual-crud.service';

@NgModule({
  declarations: [
    RegistroActasComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    GestionContractualCrudService // Agrega el servicio aquí
  ]
})
export class RegistroActasModule { }
