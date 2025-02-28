import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimeViewPageRoutingModule } from './anime-view-routing.module';

import { AnimeViewPage } from './anime-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimeViewPageRoutingModule
  ],
  declarations: [AnimeViewPage]
})
export class AnimeViewPageModule {}
