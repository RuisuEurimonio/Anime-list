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

  animeToSend : Anime | null = null;
  modalIsOpen : boolean = false;

  constructor(private animesService : AnimesService) { }

  ngOnInit() {
    
  }

  followAnime(event : MouseEvent, anime : Anime){
    event.stopPropagation();
    this.animesService.addFavAnimes(anime);
  }

  unfollowAnime(event : MouseEvent, id : number){
    event.stopPropagation();
    this.updateList.emit(id);
  }

  isFollowed(id : number){
    return this.animesService.getFavAnimes().some(anime => anime.mal_id == id);
  }

  updateModalIsOpen(value : boolean, anime : Anime){
    this.modalIsOpen = value
    this.animeToSend = anime;
  }

  closeModal(){
    this.animeToSend = null;
    this.modalIsOpen = false;
  }
}
