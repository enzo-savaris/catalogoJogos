import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ListagemComponent } from './pages/listagem/listagem';
import { FavoritosComponent } from './pages/favoritos/favoritos';
import { SobreComponent } from './pages/sobre/sobre';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lista', component: ListagemComponent },
    { path: 'favoritos', component: FavoritosComponent },
    { path: 'sobre', component: SobreComponent }
];