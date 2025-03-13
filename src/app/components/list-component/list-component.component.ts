import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Anime } from 'src/app/data/interface/Anime.model';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss'],
  imports: [IonicModule, RouterModule, CommonModule]
})
export class ListComponentComponent  implements OnInit {

  @Input() list : Anime[] | undefined | null;
  haveAnimes : boolean = false;

  constructor() { }

  ngOnInit() {
    console.log(this.list);
  }

}
