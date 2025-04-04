import { Injectable } from '@angular/core';
import { Anime } from '../interface/Anime.model';
import animeList from "src/assets/data/animesList.json";

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  Animes : Anime[] = animeList;

  constructor() { }

  getAllAnimes(): Anime[] {
    return this.Animes;
  }

  addAnime(anime: Anime){
    this.Animes.push(anime);
  }

  getRangedAnime(start :number, end :number){
    console.log(this.Animes.slice(start, end));
    return this.Animes.slice(start, end);
  }
}
