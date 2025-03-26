import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Anime } from 'src/app/data/interface/Anime.model';
import { Genre } from 'src/app/data/interface/Genre.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [RouterModule, CommonModule, IonicModule, FormsModule]
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

  genres : Genre[] = []
  anime : Anime | null = null;

  constructor() { }

  ngOnInit() {}

  addGenre(){
    console.log(this.genres)
    if(this.type_select !== "" || this.name_genre !== ""){
      this.genres.push( {mal_id: this.genres.length, type: this.type_select, name: this.name_genre});
      console.log(this.genres)
    }
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
}
