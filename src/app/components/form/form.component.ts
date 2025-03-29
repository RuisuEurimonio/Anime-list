import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Anime } from 'src/app/data/interface/Anime.model';
import { Genre } from 'src/app/data/interface/Genre.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: false,
})
export class FormComponent implements OnInit {
  @Output() sendData = new EventEmitter<Anime>();
  types = ['anime', 'manga'];
  genresList : String[] = ["Acción", "Aventura", "Comedia", "Drama", "Fantasía", "Ciencia Ficción", "Terror", "Misterio", "Romance", "Slice of Life", "Sobrenatural", "Psicológico", "Deportes", "Mecha", "Isekai", "Harem", "Magia", "Artes Marciales", "Militar", "Música"];
  statusList : String[] = ["Finalizado", "En emisión"]
  alertButtons = ['Aceptar'];
  alertMessage = "Anime creado exitosamente.";

  mal_id = 0;
  url = '';

  images = {
    jpg: { image_url: '' },
    webp: { image_url: '' },
  };

  imgUrl = ''

  title = '';
  title_japanese = '';
  episodes = 0;
  status = '';
  score = 0;
  synopsis = '';
  background = '';

  type_select = '';
  name_genre = '';

  genres: Genre[] = [];
  anime: Anime | null = null;

  constructor() {}

  ngOnInit() {
    console.log(this.genres);
  }

  addGenre() {
    if (this.name_genre.trim() && this.type_select.trim()) {
      this.genres.push({
        mal_id: this.genres.length + 1,
        name: this.name_genre,
        type: this.type_select,
      });

      this.name_genre = '';
      this.type_select = '';
    }
  }

  removeGenre(index: number) {
    this.genres.splice(index, 1);
  }

  verifyData() {
    if(this.title.trim().length < 5 || this.title.trim().length > 100){
      this.alertMessage= "El título debe tener entre 5 y 100 caracteres"
      return false;
    }

    if(this.title_japanese.trim().length < 1 || this.title.trim().length > 100){
      this.alertMessage= "El título japones debe tener entre 5 y 100 caracteres"
      return false;
    }
    
    if(this.episodes <= 0 || this.episodes > 2000){
      this.alertMessage = "El número de episodios debe ser un número entero entre 1 y 2000";
      return false;
    }

    if(this.score < 0 || this.score > 5){
      this.alertMessage = "El puntaje debe ser un número entre 0 y 5";
      return false;
    }

    if(this.status.trim().length < 2 || this.status.trim().length > 20){
      this.alertMessage = "Escoge un estado valido";
      return false;
    }
    

    if(!this.verifyUrl()){
      this.alertMessage = "Agrega una URL válida";
      return false;
    }

    this.addImg();

    if(this.genres.length <= 0){
      this.alertMessage = "Agrega almenos género";
      return false;
    }

    if(this.synopsis.trim().length < 20 || this.synopsis.trim().length > 2500){
      this.alertMessage = "La synopsis debe tener entre 20 y 500 caracteres";
      return false;
    }
    if(this.background.trim().length < 20 || this.background.trim().length > 2500){
      this.alertMessage = "El background debe tener entre 20 y 1000 caracteres";
      return false;
    }
    if(this.genres.length < 0){
      this.alertMessage = "Debe agregar al menos un género";
      return false;
    }
    return true;
  }

  addImg(){
    this.images = {jpg: {image_url: this.imgUrl}, webp: {image_url: this.imgUrl}};
  }

  verifyUrl(){
    return /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-.~:/?#[\]@!$&'()*+,;=]*)?\.(jpg|webp)$/i.test(this.imgUrl);
  }

  sendAnime(){
    if(this.verifyData()){
      this.alertMessage = "Anime creado correctamente";
      this.emitirData();
      this.cleanInputs();
    }
  }

  cleanInputs(){
    this.mal_id = 0;
    this.url = '';
    this.images = {
      jpg: { image_url: '' },
      webp: { image_url: '' },
    };
    this.title = '';
    this.title_japanese = '';
    this.episodes = 0;
    this.status = '';
    this.score = 0;
    this.synopsis = '';
    this.background = '';
    this.genres = [];
    this.anime = null;
    this.imgUrl = '';
  }

  emitirData() {
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
      genres: this.genres,
    };
    this.sendData.emit(this.anime);
  }
}
