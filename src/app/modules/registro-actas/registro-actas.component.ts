import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-actas',
  templateUrl: './registro-actas.component.html',
  styleUrls: ['./registro-actas.component.css']
})
export class RegistroActasComponent {

  constructor(private _formBuilder: FormBuilder) { }

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

  vigencia_convenio: any[] = [];
  consecutivoContrato: any[] = [];

  ngOnInit(): void {

  }

}
