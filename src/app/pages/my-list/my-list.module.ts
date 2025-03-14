import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyListPageRoutingModule } from './my-list-routing.module';

import { MyListPage } from './my-list.page';
import { ListComponentComponent } from 'src/app/components/list-component/list-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyListPageRoutingModule,
    ListComponentComponent
],
  declarations: [MyListPage]
})
export class MyListPageModule {}
