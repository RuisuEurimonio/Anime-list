import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonContent } from "@ionic/angular/standalone";
import { Anime } from 'src/app/data/interface/Anime.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: false
})
export class ModalComponent  implements OnInit {

  @Input() anime : Anime | null = null;
  @Input() modalOpen : boolean = false;
  @Output() onClose = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    console.log(this.anime);
  }

  setIsOpen(isOpen : boolean){
    this.modalOpen = isOpen
    console.log(this.anime)
  }

  closeModal(){
    this.onClose.emit();
  }

}
