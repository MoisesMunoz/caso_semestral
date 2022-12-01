import { AsignaturasService } from './../../services/asignaturas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  listaAsignaturas = [];

  constructor(private srvAsignaturas:AsignaturasService) { }

  ngOnInit() {
    this.loadAsignaturas();
  }

  async loadAsignaturas() {
    this.listaAsignaturas = await this.srvAsignaturas.getAsignaturas();
  }

}
