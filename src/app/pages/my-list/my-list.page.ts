import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/data/interface/Anime.model';
import { UserModel } from 'src/app/data/interface/User.model';
import animeListJson from 'src/assets/data/animesList.json';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.page.html',
  styleUrls: ['./my-list.page.scss'],
  standalone: false,
 
})
export class MyListPage implements OnInit {

  user : UserModel = {
    id: 1,
    username: 'Ruisu Euri',
    email: 'Euri@gmail.com',
    country: 'Colombia',
    dateCreation: '2025-03-01',
    avatarUrl: 'https://wallpapers.com/images/hd/anime-profile-picture-jioug7q8n43yhlwn.jpg'
  };
  
  listMyAnimes : Anime[] = animeListJson.slice(0,2)

  constructor() { }

  ngOnInit() {
  }

}
