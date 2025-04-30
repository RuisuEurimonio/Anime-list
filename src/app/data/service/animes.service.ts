import { Injectable } from '@angular/core';
import { Anime } from '../interface/Anime.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';
import { ApiResponse } from '../interface/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  animesCache: Anime[] = [];
  favList : Anime[] = [];
  linkApi: string = 'https://api.jikan.moe/v4/top/anime?page=2';

  constructor(private http: HttpClient) {}

  getAllAnimes(): Observable<Anime[]> {
    if(this.animesCache.length > 0){
      return of(this.animesCache);
    }

    return this.http.get<ApiResponse>(this.linkApi).pipe(
      tap(response => {
        this.animesCache = response.data
      }),
      map(response => response.data )
    )
  }

  addAnimeToCache(anime : Anime){
    this.animesCache.push(anime);
  }

  getRangedAnime(start: number, end: number) {
    console.log(this.animesCache.slice(start, end));
    return this.animesCache.slice(start, end);
  }

  getFavAnimes(){
    return this.favList;
  }

  addFavAnimes(anime : Anime){
    this.favList.push(anime);
  }

  removeFavAnime(id : number){
    this.favList.splice(id, 1);
  }
}
