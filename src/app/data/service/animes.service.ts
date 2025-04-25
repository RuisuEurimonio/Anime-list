import { Injectable } from '@angular/core';
import { Anime } from '../interface/Anime.model';
import animeList from 'src/assets/data/animesList.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  animesCache: Anime[] = [];
  linkApi: string = 'https://api.jikan.moe/v4/top/anime?page=1';

  constructor(private http: HttpClient) {}

  getAllAnimes(): Anime[] {
    if (this.animesCache.length === 0) {
      this.http.get<ApiResponse>(this.linkApi).subscribe({
        next: (response) => {
          this.animesCache = response.data;
          return this.animesCache;
        },
        error: (e) => {
          console.log(e);
        },
      });
      return [];
    } else {
      return this.animesCache;
    }
  }

  addAnimeToCache(anime : Anime){
    this.animesCache.push(anime);
  }

  getRangedAnime(start: number, end: number) {
    console.log(this.animesCache.slice(start, end));
    return this.animesCache.slice(start, end);
  }
}
