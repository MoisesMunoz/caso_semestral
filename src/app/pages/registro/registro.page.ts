import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario: Usuario = {
    username: '',
    password: '',
  }
  
  constructor(private storage:Storage, private router:Router, private alertController:AlertController) { }

  ngOnInit() { 
  }


  onSubmit() {
    console.log(this.usuario);
    this.guardar();
  }

  async guardar() {
    let usr = await this.storage.get(this.usuario.username);
    if (usr == null) {
      await this.storage.set(this.usuario.username, this.usuario);
      console.log("Usuario registrado");
      this.router.navigate(['/loginpage']);
    } else {
      this.presentAlert();
      console.log("Usuario ya existe");
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Acceso Denegado',
      subHeader: '',
      message: 'Usuario ya existe',
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
