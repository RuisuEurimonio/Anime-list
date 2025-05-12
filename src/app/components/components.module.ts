import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ListComponentComponent } from './list-component/list-component.component';
import { FormComponent } from './form/form.component';
import { RouterLink } from '@angular/router';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    ListComponentComponent,
    FormComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterLink,
    ReactiveFormsModule
  ],
  exports: [
    ListComponentComponent,
    FormComponent,
    ModalComponent
  ]
})
export class ComponentsModule {}
