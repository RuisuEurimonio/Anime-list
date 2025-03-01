import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'edit-frieren',
    loadChildren: () => import('./pages/edit-frieren/edit-frieren.module').then( m => m.EditFrierenPageModule)
  },
  {
    path: 'edit-frieren',
    loadChildren: () => import('./pages/edit-frieren/edit-frieren.module').then( m => m.EditFrierenPageModule)
  },
  {
    path: 'anime-view',
    loadChildren: () => import('./pages/anime-view/anime-view.module').then( m => m.AnimeViewPageModule)
  },
  {
    path: 'anime-list',
    loadChildren: () => import('./pages/anime-list/anime-list.module').then( m => m.AnimeListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
