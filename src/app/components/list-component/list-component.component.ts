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
  @Input() customList : boolean = false;
  @Input() otherList : Anime[] = [];

  constructor(private animesService : AnimesService) { }

  ngOnInit() {
    this.animesService.getAllAnimes().subscribe(data=>{
      this.list = data
    });
  }

}
