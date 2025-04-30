import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/data/interface/Anime.model';
import { AnimesService } from 'src/app/data/service/animes.service';

@Component({
  selector: 'app-configuration-page',
  templateUrl: './configuration-page.page.html',
  styleUrls: ['./configuration-page.page.scss'],
  standalone: false,
 
})
export class ConfigurationPagePage implements OnInit {

  animesList : Anime[] = [];

  constructor(private animesService : AnimesService) { }

  ngOnInit() {
    this.animesService.getAllAnimes().subscribe(data=>{
      this.animesList = data
    });
  }

  

}
