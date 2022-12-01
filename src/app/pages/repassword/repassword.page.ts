import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-repassword',
  templateUrl: './repassword.page.html',
  styleUrls: ['./repassword.page.scss'],
})
export class RepasswordPage implements OnInit {

  registrado:Usuario=null;

  usuario:Usuario={
    username:'',
    password:'',
  }

  constructor(private router:Router, private alertController:AlertController, private storage:Storage) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.usuario);
    this.recupass();
  }

  async recupass() {
    this.registrado =await this.storage.get(this.usuario.username);
    if (this.registrado!=null) {
      if (this.usuario.username==this.registrado.username) {
        console.log("Puede pasar");
        let navigationExtras:NavigationExtras={
          state:{
            miusuario:this.usuario,
          }
        }
        this.router.navigate(['/loginpage'], navigationExtras);
      } else {
        this.presentAlert();
        console.log("Usuario no existe!!!");
      }
    } else {
      this.presentAlert();
      console.log("Error");
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Acceso Denegado',
      subHeader: '',
      message: 'Usuario incorrecto',
      buttons: [
        {
          text: 'Aceptar',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
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
