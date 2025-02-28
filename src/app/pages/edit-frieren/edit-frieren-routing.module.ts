import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFrierenPage } from './edit-frieren.page';

const routes: Routes = [
  {
    path: '',
    component: EditFrierenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFrierenPageRoutingModule {}
