import { Storage } from '@ionic/storage-angular';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';
import { Asignatura } from 'src/app/interfaces/asignatura';
import { AsignaturasService } from './../../services/asignaturas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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

  code: any;

  listaAsignaturas = [];

  asignaturaActualizada: Asignatura = {
    codasignatura:'',
    nomasignatura:'',
    seccion:'',
    clasesrealizadas: 0,
    clasesasistidas: 0,
  }

  username:string='';

  constructor(private barcodeScanner: BarcodeScanner, private srvAsignaturas:AsignaturasService, private alertController:AlertController, private router:Router, private activatedRoute:ActivatedRoute, private menu:MenuController, private storage:Storage) {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        let usuario=this.router.getCurrentNavigation().extras.state.miusuario;
        this.username=usuario.username;
      }
    })
  }

  cerrarSesion(){
    this.logout();
    this.router.navigate(['/loginpage']);
  }

  async logout() {
    await this.storage.set('session',null);
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.code=barcodeData.text;
      console.log('Barcode data', barcodeData);
      console.log('Code', this.code);
      if (this.code=="ASY4131" || this.code=="CSY4111" || this.code=="MAT4140" || this.code=="EAY4470" || this.code=="INI5111" || this.code=="APY4461" || this.code=="PGY4121") {
        this.actualizarAsignatura(this.code, 0);
      } else {
        this.codigoIncorrecto();
      }
    }).catch(err => {
      console.log('Error', err);
    });
  }

  async loadAsignaturas() {
    this.listaAsignaturas = await this.srvAsignaturas.getAsignaturas();
  }

  async updateAsignatura(ind,item) {
    this.srvAsignaturas.updateAsignatura(ind,item);
    this.listaAsignaturas.splice(ind, 1, item);
  }

  actualizarAsignatura(cod:string, index:number) {
    if (cod=="ASY4131") {
      index=0;
      this.asignaturaActualizada.codasignatura=this.asignatura1.codasignatura;
      this.asignaturaActualizada.nomasignatura=this.asignatura1.nomasignatura;
      this.asignaturaActualizada.seccion=this.asignatura1.seccion;
      this.asignaturaActualizada.clasesrealizadas=this.asignatura1.clasesrealizadas+1;
      this.asignaturaActualizada.clasesasistidas=this.asignatura1.clasesasistidas+1;
      this.updateAsignatura(index, this.asignaturaActualizada);
      this.alertaAsistenciaRegistrada(this.asignaturaActualizada.nomasignatura, this.asignaturaActualizada.codasignatura);
    } if (cod=="CSY4111") {
      index=1;
      this.asignaturaActualizada.codasignatura=this.asignatura2.codasignatura;
      this.asignaturaActualizada.nomasignatura=this.asignatura2.nomasignatura;
      this.asignaturaActualizada.seccion=this.asignatura2.seccion;
      this.asignaturaActualizada.clasesrealizadas=this.asignatura2.clasesrealizadas+1;
      this.asignaturaActualizada.clasesasistidas=this.asignatura2.clasesasistidas+1;
      this.updateAsignatura(index, this.asignaturaActualizada);
      this.alertaAsistenciaRegistrada(this.asignaturaActualizada.nomasignatura, this.asignaturaActualizada.codasignatura);
    } if (cod=="MAT4140") {
      index=2;
      this.asignaturaActualizada.codasignatura=this.asignatura3.codasignatura;
      this.asignaturaActualizada.nomasignatura=this.asignatura3.nomasignatura;
      this.asignaturaActualizada.seccion=this.asignatura3.seccion;
      this.asignaturaActualizada.clasesrealizadas=this.asignatura3.clasesrealizadas+1;
      this.asignaturaActualizada.clasesasistidas=this.asignatura3.clasesasistidas+1;
      this.updateAsignatura(index, this.asignaturaActualizada);
      this.alertaAsistenciaRegistrada(this.asignaturaActualizada.nomasignatura, this.asignaturaActualizada.codasignatura);
    } if (cod=="EAY4470") {
      index=3;
      this.asignaturaActualizada.codasignatura=this.asignatura4.codasignatura;
      this.asignaturaActualizada.nomasignatura=this.asignatura4.nomasignatura;
      this.asignaturaActualizada.seccion=this.asignatura4.seccion;
      this.asignaturaActualizada.clasesrealizadas=this.asignatura4.clasesrealizadas+1;
      this.asignaturaActualizada.clasesasistidas=this.asignatura4.clasesasistidas+1;
      this.updateAsignatura(index, this.asignaturaActualizada);
      this.alertaAsistenciaRegistrada(this.asignaturaActualizada.nomasignatura, this.asignaturaActualizada.codasignatura);
    } if (cod=="INI5111") {
      index=4;
      this.asignaturaActualizada.codasignatura=this.asignatura5.codasignatura;
      this.asignaturaActualizada.nomasignatura=this.asignatura5.nomasignatura;
      this.asignaturaActualizada.seccion=this.asignatura5.seccion;
      this.asignaturaActualizada.clasesrealizadas=this.asignatura5.clasesrealizadas+1;
      this.asignaturaActualizada.clasesasistidas=this.asignatura5.clasesasistidas+1;
      this.updateAsignatura(index, this.asignaturaActualizada);
      this.alertaAsistenciaRegistrada(this.asignaturaActualizada.nomasignatura, this.asignaturaActualizada.codasignatura);
    } if (cod=="APY4461") {
      index=5;
      this.asignaturaActualizada.codasignatura=this.asignatura6.codasignatura;
      this.asignaturaActualizada.nomasignatura=this.asignatura6.nomasignatura;
      this.asignaturaActualizada.seccion=this.asignatura6.seccion;
      this.asignaturaActualizada.clasesrealizadas=this.asignatura6.clasesrealizadas+1;
      this.asignaturaActualizada.clasesasistidas=this.asignatura6.clasesasistidas+1;
      this.updateAsignatura(index, this.asignaturaActualizada);
      this.alertaAsistenciaRegistrada(this.asignaturaActualizada.nomasignatura, this.asignaturaActualizada.codasignatura);
    } if (cod=="PGY4121") {
      index=6;
      this.asignaturaActualizada.codasignatura=this.asignatura7.codasignatura;
      this.asignaturaActualizada.nomasignatura=this.asignatura7.nomasignatura;
      this.asignaturaActualizada.seccion=this.asignatura7.seccion;
      this.asignaturaActualizada.clasesrealizadas=this.asignatura7.clasesrealizadas+1;
      this.asignaturaActualizada.clasesasistidas=this.asignatura7.clasesasistidas+1;
      this.updateAsignatura(index, this.asignaturaActualizada);
      this.alertaAsistenciaRegistrada(this.asignaturaActualizada.nomasignatura, this.asignaturaActualizada.codasignatura);
    }
  }

  codigoIncorrecto() {
    this.alertaCodigoIncorrecto();
  }

  async alertaAsistenciaRegistrada(nombre:string, codigo:string) {
    let date: Date = new Date();
    const alert = await this.alertController.create({
      header: 'Asistencia Registrada',
      subHeader: '' + date,
      message: `${nombre} - Codigo ${codigo}`,
      buttons: [
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
            this.router.navigate(['/asistencia']);
          },
        },
      ],
      backdropDismiss:false,
      cssClass:'miclase',
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log(`Dismissed with role: ${role}`);
  }

  async alertaCodigoIncorrecto() {
    const alert = await this.alertController.create({
      header: 'Codigo Incorrecto',
      subHeader: '',
      message: ``,
      buttons: [
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
            this.router.navigate(['/home']);
          },
        },
      ],
      backdropDismiss:false,
      cssClass:'miclase',
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log(`Dismissed with role: ${role}`);
  }

}
