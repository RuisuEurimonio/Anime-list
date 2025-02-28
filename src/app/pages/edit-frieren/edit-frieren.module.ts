import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFrierenPageRoutingModule } from './edit-frieren-routing.module';

import { EditFrierenPage } from './edit-frieren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFrierenPageRoutingModule
  ],
  declarations: [EditFrierenPage]
})
export class EditFrierenPageModule {}
