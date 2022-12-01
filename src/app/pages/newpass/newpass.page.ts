import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { Storage } from '@ionic/storage-angular';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newpass',
  templateUrl: './newpass.page.html',
  styleUrls: ['./newpass.page.scss'],
})
export class NewpassPage implements OnInit {

  registrado:Usuario=null;

  usuario:Usuario={
    username:'',
    password:'',
  }

  username:string='';

  constructor(private router:Router, private alertController:AlertController, private storage:Storage, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit() {
  }

}
