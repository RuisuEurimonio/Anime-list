import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/data/interface/user.model';

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
  
  constructor() { }

  ngOnInit() {
  }

}
