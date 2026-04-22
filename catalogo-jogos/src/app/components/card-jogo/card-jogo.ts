import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-jogo',
  standalone: true,
  templateUrl: './card-jogo.html',
  styleUrls: ['./card-jogo.css']
})
export class CardJogoComponent {

  @Input() jogo: any;

  @Output() favoritar = new EventEmitter<any>();
  @Output() remover = new EventEmitter<any>();

  onFavoritar() {
    this.favoritar.emit(this.jogo);
  }

  onRemover() {
    this.remover.emit(this.jogo);
  }
}