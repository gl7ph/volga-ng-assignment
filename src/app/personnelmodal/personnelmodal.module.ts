import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnelmodalPageRoutingModule } from './personnelmodal-routing.module';

import { PersonnelmodalPage } from './personnelmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonnelmodalPageRoutingModule
  ],
  declarations: [PersonnelmodalPage]
})
export class PersonnelmodalPageModule {}
