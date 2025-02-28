import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-view',
  templateUrl: './anime-view.page.html',
  styleUrls: ['./anime-view.page.scss'],
  standalone: false,
})
export class AnimeViewPage implements OnInit {

  anime : string = "Sōsō no Frieren"
  type : string = "Aventura"
  image : string = "https://m.media-amazon.com/images/S/pv-target-images/b054f79f938837f13e1be59cb3d0cf4afcc4f4923ceae6fc192837b03fa726eb.jpg"
  description : string = "Sōsō no Frieren ​ es una serie de manga escrita por Kanehito Yamada e ilustrada por Tsukasa Abe. Se ha serializado en la revista Shūkan Shōnen Sunday de Shōgakukan desde el 28 de abril de 2020, y hasta el momento sus capítulos han sido recopilados en trece volúmenes tankōbon."
  altImage = "Portada imagen anime Frieren"
  personajePrincipal : string = "フリーレン Furīren"
  fechaEmision: string = "2023-09-29"
  capitulos: number = 28
  finalizado : boolean = true

  constructor() { }

  ngOnInit() {
  }

}
