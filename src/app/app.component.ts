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
    { title: 'Frieren', url: '/anime-view', icon: 'person' },
    { title: 'Editar anime', url: '/edit-frieren', icon: 'create' },
    { title: 'Mi lista', url: '/my-list', icon: 'heart' }
  ];
  public labels = ['Animes', 'Mangas'];
  constructor() {}
}
