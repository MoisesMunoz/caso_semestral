import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepasswordPageRoutingModule } from './repassword-routing.module';

import { RepasswordPage } from './repassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepasswordPageRoutingModule
  ],
  declarations: [RepasswordPage]
})
export class RepasswordPageModule {}
