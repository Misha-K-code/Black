import { Routes } from '@angular/router';
import { FilmDetails } from './film-details/film-details';
import { FilmSearch } from './film-search/film-search';
import { FilmRaiting } from './film-raiting/film-raiting';

export const routes: Routes = [
  { path: 'film', component: FilmDetails },
  { path: 'search', component: FilmSearch },
  { path: 'raiting', component: FilmRaiting },
];
