import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Anime } from 'src/app/data/interface/Anime.model';
import { Genre } from 'src/app/data/interface/Genre.model';
import { AnimesService } from 'src/app/data/service/animes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: false,
})
export class FormComponent implements OnInit {
  types = ['anime', 'manga'];
  genresList : string[] = ["Acción", "Aventura", "Comedia", "Drama", "Fantasía", "Ciencia Ficción", "Terror", "Misterio", "Romance", "Slice of Life", "Sobrenatural", "Psicológico", "Deportes", "Mecha", "Isekai", "Harem", "Magia", "Artes Marciales", "Militar", "Música"];
  statusList : string[] = ["Finalizado", "En emisión"]
  alertButtons : string[] = ['Aceptar'];
  alertMessage : string = "Valida los campos necesarios.";
  formValid : boolean = true;

  mal_id = 0;
  url = '';

  images = {
    jpg: { image_url: '' },
    webp: { image_url: '' },
  };

  genres: Genre[] = [];
  anime: Anime | null = null;

  formGroup : FormGroup = new FormGroup({});

  constructor(private animesService : AnimesService, private fb : FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.formGroup = this.fb.group({
      title:["", Validators.required],
      title_japanese:["",Validators.required],
      episodes:["",Validators.required],
      status:['', Validators.required],
      score:[0,[Validators.required, Validators.min(0), Validators.max(5)]],
      imageUrl:["",[Validators.required, Validators.pattern(/^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-.~:/?#[\]@!$&'()*+,;=]*)?\.(jpg|webp)$/i)]],
      synopsis:['',[Validators.required, Validators.minLength(100)]],
      background:['',[Validators.required, Validators.minLength(100)]],
      name_genre:[''],
      type_select:['',]
    })
  }

  addGenre() {
    if (this.formGroup?.get("name_genre")?.valid && this.formGroup?.get("type_select")) {
      this.genres.push({
        mal_id: this.genres.length + 1,
        name: this.formGroup?.get("name_genre")?.value,
        type: this.formGroup?.get("type_select")?.value,
      });

      this.formGroup?.get("name_genre")?.setValue("");
      this.formGroup?.get("Type_select")?.setValue("");
    }
  }

  removeGenre(index: number) {
    this.genres.splice(index, 1);
  }

  sendAnime(){
    if(this.formGroup?.valid){
      this.images = {jpg: {image_url: this.formGroup.get("imageUrl")?.value}, webp:{image_url: this.formGroup.get("imageUrl")?.value}}
      this.emitirData();
      this.formGroup?.reset();  
      this.alertMessage = "Anime creado correctamente";
      this.genres = []
      this.formValid = true;
    }else{
      this.formValid = false;
    }
  }

  emitirData() {
    this.anime = {
      mal_id: this.mal_id,
      url: this.url,
      images: this.images,
      title: this.formGroup?.get("title")?.value,
      title_japanese: this.formGroup?.get("title_japanese")?.value,
      episodes: this.formGroup?.get("episodes")?.value,
      status: this.formGroup?.get("status")?.value,
      score: this.formGroup?.get("score")?.value,
      synopsis: this.formGroup?.get("synopsis")?.value,
      background: this.formGroup?.get("background")?.value,
      genres: this.genres,
    };
    this.animesService.sendDataApi(this.anime);
    
  }
}
