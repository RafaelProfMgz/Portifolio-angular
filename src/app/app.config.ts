import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Configura Zone.js
    provideRouter(routes), // Configura as rotas
    provideClientHydration(withEventReplay()), // Configura a hidratação do lado do cliente
    provideHttpClient(withInterceptorsFromDi()), // Configura o HttpClient
  ],
};
