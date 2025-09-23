import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { FilmDetails } from './app/film-details/film-details';

bootstrapApplication(FilmDetails, appConfig)
  .catch((err) => console.error(err));
