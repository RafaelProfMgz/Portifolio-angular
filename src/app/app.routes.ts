import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error-404/error-404.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { GithubComponent } from './components/github/github.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full', // Redireciona para o Home quando o caminho estiver vazio
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'projetos',
    component: ProjetosComponent,
  },
  {
    path: 'contato',
    component: ContatoComponent,
  },
  {
    path: 'github',
    component: GithubComponent, 
  },

  {
    path: '**',
    component: Error404Component, // Página de erro para rotas não encontradas
  },
];
