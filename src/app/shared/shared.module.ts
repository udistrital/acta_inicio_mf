import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantillaTarjetaContenedoraComponent } from './templates/plantilla-tarjeta-contenedora/plantilla-tarjeta-contenedora.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [PlantillaTarjetaContenedoraComponent],
  imports: [CommonModule, MatCardModule, MatIconModule],
  exports: [
    //components
    PlantillaTarjetaContenedoraComponent,
    //modules
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
