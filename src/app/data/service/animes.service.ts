import { Injectable } from '@angular/core';
import { Anime } from '../interface/Anime.model';
import animeList from "src/assets/data/animesList.json";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  animesCache : Anime[] = animeList;
  linkApi : string = "https://api.jikan.moe/v4/top/anime";

  constructor(private http : HttpClient) { }

  getAllAnimes(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.linkApi);
  }

  getRangedAnime(start :number, end :number){
    console.log(this.animesCache.slice(start, end));
    return this.animesCache.slice(start, end);
  }
}
