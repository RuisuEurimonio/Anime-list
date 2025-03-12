import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimeListPageRoutingModule } from './anime-list-routing.module';

import { AnimeListPage } from './anime-list.page';
import { ListComponentComponent } from 'src/app/components/list-component/list-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimeListPageRoutingModule,
    ListComponentComponent
  ],
  declarations: [AnimeListPage]
})
export class AnimeListPageModule {}
