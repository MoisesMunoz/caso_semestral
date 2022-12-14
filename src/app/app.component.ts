import { AsignaturasService } from './services/asignaturas.service';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Asignatura } from './interfaces/asignatura';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  asignatura1: Asignatura = {
    codasignatura:'ASY4131',
    nomasignatura:'Arquitectura',
    seccion:'007D',
    clasesrealizadas: 0,
    clasesasistidas: 0,
  }

  asignatura2: Asignatura = {
    codasignatura:'CSY4111',
    nomasignatura:'Calidad de Software',
    seccion:'005D',
    clasesrealizadas: 0,
    clasesasistidas: 0,
  }

  asignatura3: Asignatura = {
    codasignatura:'MAT4140',
    nomasignatura:'Estadistica Descriptiva',
    seccion:'006D',
    clasesrealizadas: 0,
    clasesasistidas: 0,
  }

  asignatura4: Asignatura = {
    codasignatura:'EAY4470',
    nomasignatura:'Etica para el Trabajo',
    seccion:'006D',
    clasesrealizadas: 0,
    clasesasistidas: 0,
  }

  asignatura5: Asignatura = {
    codasignatura:'INI5111',
    nomasignatura:'Ingles Intermedio',
    seccion:'012D',
    clasesrealizadas: 0,
    clasesasistidas: 0,
  }

  asignatura6: Asignatura = {
    codasignatura:'APY4461',
    nomasignatura:'Proceso de Portafolio',
    seccion:'018D',
    clasesrealizadas: 0,
    clasesasistidas: 0,
  }

  asignatura7: Asignatura = {
    codasignatura:'PGY4121',
    nomasignatura:'Programacion de Aplicaciones Moviles',
    seccion:'005D',
    clasesrealizadas: 0,
    clasesasistidas: 0,
  }

  constructor( private storage:Storage, private srvAsignaturas:AsignaturasService, private router:Router ) {}

  async ngOnInit() {
    await this.storage.create();
    await this.addAsignatura();
  }

  async addAsignatura() {
    let asig = await this.storage.get("Asignaturas");
    if (asig == null) {
      await this.srvAsignaturas.addAsignatura(this.asignatura1);
      await this.srvAsignaturas.addAsignatura(this.asignatura2);
      await this.srvAsignaturas.addAsignatura(this.asignatura3);
      await this.srvAsignaturas.addAsignatura(this.asignatura4);
      await this.srvAsignaturas.addAsignatura(this.asignatura5);
      await this.srvAsignaturas.addAsignatura(this.asignatura6);
      await this.srvAsignaturas.addAsignatura(this.asignatura7);
      console.log("Asignaturas añadidas correctamente");
    } else {
      console.log("Asignaturas ya existen");
    }
  }

  cerrarSesion(){
    this.logout();
    this.router.navigate(['/loginpage']);
  }

  async logout() {
    await this.storage.set('session',null);
  }

}
