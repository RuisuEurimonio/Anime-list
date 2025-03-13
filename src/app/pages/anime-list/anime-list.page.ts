import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/data/interface/Anime.model';
import animeListJson from 'src/assets/data/animesList.json';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.page.html',
  styleUrls: ['./anime-list.page.scss'],
  standalone: false,
})
export class AnimeListPage implements OnInit {

  listAnimes : Anime[] = animeListJson;

  constructor() { }

  ngOnInit() {
  }

}
