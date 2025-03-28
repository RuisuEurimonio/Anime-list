import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/data/interface/Anime.model';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss'],
  standalone: false,
 
})
export class ListComponentComponent  implements OnInit {

  @Input() list : Anime[] | undefined | null;
  @Input() showTitle : boolean = true;
  @Input() showButtonList : boolean = true;
  haveAnimes : boolean = false;

  constructor() { }

  ngOnInit() {
    console.log(this.list);
  }

}
