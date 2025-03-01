import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/data/interface/Anime.model';
import animeListJson from 'src/assets/data/animesList.json'

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.page.html',
  styleUrls: ['./anime-list.page.scss'],
  standalone: false,
 
})
export class AnimeListPage implements OnInit {

  animeList : Anime[] | undefined | null = animeListJson;
  haveAnimes : boolean = false;

  constructor() { }

  ngOnInit() {
    if(this.animeList != null && this.animeList.length > 0) this.haveAnimes = true;
  }

}
