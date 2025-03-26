import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/data/interface/Anime.model';

@Component({
  selector: 'app-configuration-page',
  templateUrl: './configuration-page.page.html',
  styleUrls: ['./configuration-page.page.scss'],
  standalone: false,
 
})
export class ConfigurationPagePage implements OnInit {

  listAnime : Anime[] = [];

  addItem(anime : Anime){
    this.listAnime.push(anime);
  }

  constructor() { }

  ngOnInit() {
  }

}
