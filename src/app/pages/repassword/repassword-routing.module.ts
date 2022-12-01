import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepasswordPage } from './repassword.page';

const routes: Routes = [
  {
    path: '',
    component: RepasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepasswordPageRoutingModule {}
