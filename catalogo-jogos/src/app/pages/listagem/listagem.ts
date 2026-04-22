import { Component } from '@angular/core';
import { CardJogoComponent } from '../../components/card-jogo/card-jogo';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [CardJogoComponent],
  templateUrl: './listagem.html'
})
export class ListagemComponent {

  jogos = [
    { nome: 'Valorant', plataforma: 'PC', genero: 'FPS', idade: '16+' },
    { nome: 'FIFA 24', plataforma: 'PS5', genero: 'Esporte', idade: 'Livre' },
    { nome: 'GTA V', plataforma: 'PC', genero: 'Ação', idade: '18+' }
  ];

  favoritos: any[] = [];

  adicionarFavorito(jogo: any) {
    this.favoritos.push(jogo);
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }

  removerJogo(jogo: any) {
    this.jogos = this.jogos.filter(j => j !== jogo);
  }
}