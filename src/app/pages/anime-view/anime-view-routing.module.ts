import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimeViewPage } from './anime-view.page';

const routes: Routes = [
  {
    path: '',
    component: AnimeViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimeViewPageRoutingModule {}
