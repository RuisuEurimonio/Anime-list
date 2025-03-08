import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Anime } from 'src/app/data/interface/Anime.model';
import animeListJson from 'src/assets/data/animesList.json';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss'],
  imports: [IonicModule, RouterModule, CommonModule]
})
export class ListComponentComponent  implements OnInit {

  animeList : Anime[] | undefined | null = animeListJson;
  haveAnimes : boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
