import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Anime } from 'src/app/data/interface/Anime.model';
import { Genre } from 'src/app/data/interface/Genre.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: false
})
export class FormComponent  implements OnInit {

  @Output() sendData = new EventEmitter<Anime>();
  
  mal_id = 0
  url = ''
  images = { 
    jpg: { image_url: '' }, 
    webp: { image_url: '' } 
  };
  title = ''
  title_japanese = ''
  episodes = 0
  status = ''
  score = 0
  synopsis = ''
  background = ''
  types = ["anime", "manga"]
  type_select = "";
  name_genre = ''

  genres: Genre[] = [];
  anime : Anime | null = null;

  constructor() { }

  ngOnInit() {
    console.log(this.genres)
  }

  addGenre() {
    if (this.name_genre.trim() && this.type_select.trim()) {
      this.genres.push({
        mal_id: this.genres.length + 1, 
        name: this.name_genre, 
        type: this.type_select
      });

      this.name_genre = '';
      this.type_select = '';
    }
  }

  removeGenre(index: number) {
    this.genres.splice(index, 1);
  }

  emitirData(){
    this.anime = {
      mal_id: this.mal_id,
      url: this.url,
      images: this.images,
      title: this.title,
      title_japanese: this.title_japanese,
      episodes: this.episodes,
      status: this.status,
      score: this.score,
      synopsis: this.synopsis,
      background: this.background,
      genres: this.genres
    }
    this.sendData.emit(this.anime);
  }

  verifyData(){
    return 
  }
}
