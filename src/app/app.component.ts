import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Animes', url: '/anime-list', icon: 'list' },
    { title: 'Mi lista', url: '/my-list', icon: 'heart' },
    { title: 'Configuración', url: '/anime-view', icon: 'cog'},
    { title: 'Configuración', url: '/edit-frieren', icon: 'cog'},
    { title: 'Configuración', url: '/configuration-page', icon: 'cog'}
  ];
  public labels = ['Animes', 'Mangas'];
  constructor() {}
}
