import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {

  registrado:Usuario=null;

  usuario:Usuario={
    username:'',
    password:'',
  }

  constructor(private router:Router, private alertController:AlertController, private storage:Storage) { }

  ngOnInit() {
  }

  onSubmit() {
    /* if(this.usuario.username=="moises" && this.usuario.password=="1234")
    {
      
      let navigationExtras:NavigationExtras={
        state:{
          miusuario:this.usuario,
        }
      }
      this.router.navigate(['/home'],navigationExtras)
      console.log(navigationExtras);
    }
    else{
      this.presentAlert();
      console.log("Denegado");
    } */
    console.log(this.usuario);
    this.logear();
  }

  async logear() {
    this.registrado =await this.storage.get(this.usuario.username);
    if (this.registrado!=null) {
      if (this.usuario.username==this.registrado.username && this.usuario.password==this.registrado.password) {
        console.log("Puede pasar");
        await this.storage.set('session',this.registrado.username);
        let navigationExtras:NavigationExtras={
          state:{
            miusuario:this.usuario,
          }
        }
        this.router.navigate(['/home'], navigationExtras);
      } else {
        this.presentAlert();
        console.log("Usuario no existe!!!");
      }
    } else {
      this.presentAlert();
      console.log("Pa la casa por agilao");
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Acceso Denegado',
      subHeader: '',
      message: 'Usuario o Contraseña incorrectos',
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
