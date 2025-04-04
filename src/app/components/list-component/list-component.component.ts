import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/data/interface/Anime.model';
import { AnimesService } from 'src/app/data/service/animes.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss'],
  standalone: false,
 
})
export class ListComponentComponent  implements OnInit {

  list : Anime[] = [];
  @Input() showTitle : boolean = true;
  @Input() showButtonList : boolean = true;

  constructor(private animesService : AnimesService) { }

  ngOnInit() {
    this.list = this.animesService.getAllAnimes();
  }

}
