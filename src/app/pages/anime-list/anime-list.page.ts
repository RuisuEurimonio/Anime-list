import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/data/interface/Anime.model';
import { AnimesService } from 'src/app/data/service/animes.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.page.html',
  styleUrls: ['./anime-list.page.scss'],
  standalone: false,
})
export class AnimeListPage implements OnInit {

  listAnimes : Anime[] = [];

  constructor(private animesService : AnimesService) { }

  ngOnInit() {
    this.animesService.getAllAnimes().subscribe(data=>{
      this.listAnimes = data;
    });
  }

}
