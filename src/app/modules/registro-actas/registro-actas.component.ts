import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GestionContractualCrudService } from 'src/app/services/gestion-contractual-crud.service';

@Component({
  selector: 'app-registro-actas',
  templateUrl: './registro-actas.component.html',
  styleUrls: ['./registro-actas.component.css']
})
export class RegistroActasComponent implements OnInit {

  form = this._formBuilder.group({
    vigencia: ['', Validators.required],
    consecutivoContrato: ['', Validators.required],
    fechaSuscripcion: [''],
    tipoDocumento: [''],
    numeroDocumento: [''],
    nombreContratista: [''],
    valorContrato: [''],
    supervisor: [''],
    objeto: [''],
    numeroPoliza: [''],
    fechaExpedicion: [''],
    fechaAprobacionPoliza: [''],
    numeroRegistroPresupuestal: [''],
    valorRegistroPresupuestal: [''],
    fechaAprobacionRP: [''],
    plazo: [''],
    fechaInicio: [''],
    fechaTerminacion: [''],
  });

  contratosActivos: any[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private gestionContractualService: GestionContractualCrudService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.obtenerContratosActivos();
  }

  obtenerContratosActivos() {
    this.gestionContractualService.getContratosActivos().subscribe(
      (data: any) => {
        this.contratosActivos = data;
        this.snackBar.open('Contratos activos cargados', 'Cerrar', { duration: 2000 });
      },
      (error) => {
        this.snackBar.open('Error al cargar contratos activos', 'Cerrar', { duration: 2000 });
        console.error('Error al cargar contratos activos:', error);
      }
    );
  }

  registrarActaInicio() {
    if (this.form.invalid) {
      this.snackBar.open('Complete todos los campos obligatorios', 'Cerrar', { duration: 2000 });
      return;
    }
  
    const actaInicioData = this.form.value;
  
    this.gestionContractualService.post('actas-inicio', actaInicioData).subscribe(
      (response) => {
        this.snackBar.open('Acta de inicio registrada correctamente', 'Cerrar', { duration: 2000 });
        this.form.reset();
      },
      (error) => {
        this.snackBar.open('Error al registrar el acta de inicio', 'Cerrar', { duration: 2000 });
        console.error('Error al registrar el acta de inicio:', error);
      }
    );
  }  
}
