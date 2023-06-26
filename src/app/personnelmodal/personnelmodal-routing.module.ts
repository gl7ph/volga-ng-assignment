import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnelmodalPage } from './personnelmodal.page';

const routes: Routes = [
  {
    path: '',
    component: PersonnelmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnelmodalPageRoutingModule {}
