import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimeListPageRoutingModule } from './anime-list-routing.module';

import { AnimeListPage } from './anime-list.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimeListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AnimeListPage]
})
export class AnimeListPageModule {}
