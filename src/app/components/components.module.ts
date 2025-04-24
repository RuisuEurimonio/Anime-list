import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ListComponentComponent } from './list-component/list-component.component';
import { FormComponent } from './form/form.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    ListComponentComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterLink,
  ],
  exports: [
    ListComponentComponent,
    FormComponent
  ]
})
export class ComponentsModule {}
