import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Anime } from 'src/app/data/interface/Anime.model';
import { AnimesService } from 'src/app/data/service/animes.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss'],
  standalone: false,
 
})
export class ListComponentComponent  implements OnInit {

  @Input() list : Anime[] = [];
  @Output() updateList = new EventEmitter<number>();
  @Input() showTitle : boolean = true;
  @Input() showButtonList : boolean = true;
  @Input() customList : boolean = false;
  @Input() otherList : Anime[] = [];

  constructor(private animesService : AnimesService) { }

  ngOnInit() {
    
  }

  followAnime(anime : Anime){
    this.animesService.addFavAnimes(anime);
  }

  unfollowAnime(id : number){
    this.updateList.emit(id);
  }

  isFollowed(id : number){
    return this.animesService.getFavAnimes().some(anime => anime.mal_id == id);
  }

}
