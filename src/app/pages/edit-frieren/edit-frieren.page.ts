import { Component, OnInit } from '@angular/core';
import { DatetimeChangeEventDetail, IonDatetimeCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-edit-frieren',
  templateUrl: './edit-frieren.page.html',
  styleUrls: ['./edit-frieren.page.scss'],
  standalone: false,
})
export class EditFrierenPage implements OnInit {

  anime : string = "Sōsō no Frieren"
  type : string = "Aventura"
  image : string = "https://m.media-amazon.com/images/S/pv-target-images/b054f79f938837f13e1be59cb3d0cf4afcc4f4923ceae6fc192837b03fa726eb.jpg"
  description : string = "Sōsō no Frieren ​ es una serie de manga escrita por Kanehito Yamada e ilustrada por Tsukasa Abe. Se ha serializado en la revista Shūkan Shōnen Sunday de Shōgakukan desde el 28 de abril de 2020, y hasta el momento sus capítulos han sido recopilados en trece volúmenes tankōbon."
  altImage = "Portada imagen anime Frieren"
  personajePrincipal : string = "フリーレン Furīren"
  fechaEmision: string = "2023-09-29"
  capitulos: number = 28
  finalizado : boolean = true

  state : "hidden modal" | "visible modal" = "hidden modal";

  constructor() { }

  ngOnInit() {
  }

  onChangeState(){
    if(this.state == "hidden modal"){
      this.state = "visible modal";
    } else {
      this.state = "hidden modal";
    }
  }

  onChangeElement(type: string, value: string | number | boolean | null = null, event? : IonDatetimeCustomEvent<DatetimeChangeEventDetail>) {
      event?.stopPropagation();
    if(value == null || value == "" || value === undefined){
      return;
    }
    value = value.toString();
    switch (type) {
      case 'anime':
        this.anime = value;
        break;
      case 'type':
        this.type = value;
        break;
      case 'description':
        this.description = value;
        break;
      case 'personajePrincipal':
        this.personajePrincipal = value;
        break;
      case 'fechaEmision':
        this.fechaEmision = value;
        break;
      case 'capitulos':
        this.capitulos = parseInt(value);
        break;
      case 'finalizado':
        console.log("hoalaa")
        console.log(value)
        this.finalizado = value === 'true';
        break;
    }
  }
  
  showData(){
    console.log("Anime: ", this.anime);
    console.log("Tipo: ", this.type);
    console.log("Descripción: ", this.description);
    console.log("Personaje Principal: ", this.personajePrincipal);
    console.log("Fecha de Emisión: ", this.fechaEmision);
    console.log("Capítulos: ", this.capitulos);
    console.log("Finalizado: ", this.finalizado);
  }

}
