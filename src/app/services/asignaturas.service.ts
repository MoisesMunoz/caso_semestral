import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  constructor( private storage:Storage) { }

  getAsignaturas() {
    return this.storage.get("Asignaturas") || [];
  }

  async addAsignatura(item) {
    const storedData = await this.storage.get("Asignaturas") || [];
    storedData.push(item);
    return this.storage.set("Asignaturas", storedData);
  }

  async updateAsignatura(index,item) {
    const storedData = await this.storage.get("Asignaturas") || [];
    storedData.splice(index, 1, item);
    return this.storage.set("Asignaturas", storedData);
  }

}
