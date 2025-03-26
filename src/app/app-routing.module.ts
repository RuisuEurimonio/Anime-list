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
    path: 'anime-view',
    loadChildren: () => import('./pages/anime-view/anime-view.module').then( m => m.AnimeViewPageModule)
  },
  {
    path: 'anime-list',
    loadChildren: () => import('./pages/anime-list/anime-list.module').then( m => m.AnimeListPageModule)
  },
  {
    path: 'my-list',
    loadChildren: () => import('./pages/my-list/my-list.module').then( m => m.MyListPageModule)
  },
  {
    path: 'configuration-page',
    loadChildren: () => import('./pages/configuration-page/configuration-page.module').then( m => m.ConfigurationPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
