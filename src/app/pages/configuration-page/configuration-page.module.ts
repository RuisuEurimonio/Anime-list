import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurationPagePageRoutingModule } from './configuration-page-routing.module';

import { ConfigurationPagePage } from './configuration-page.page';
import { ListComponentComponent } from 'src/app/components/list-component/list-component.component';
import { FormComponent } from 'src/app/components/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurationPagePageRoutingModule,
    ListComponentComponent,
    FormComponent
  ],
  declarations: [ConfigurationPagePage]
})
export class ConfigurationPagePageModule {}
