import { Component, OnInit } from '@angular/core';
import { CardJogoComponent } from '../../components/card-jogo/card-jogo';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CardJogoComponent],
  templateUrl: './favoritos.html'
})
export class FavoritosComponent implements OnInit {

  favoritos: any[] = [];

  ngOnInit() {
    const dados = localStorage.getItem('favoritos');
    this.favoritos = dados ? JSON.parse(dados) : [];
  }

  remover(jogo: any) {
    this.favoritos = this.favoritos.filter(j => j !== jogo);
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }
}