import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosselComponent } from '../carrossel/carrossel.component';
import { ManutencaoComponent } from '../modal/manutencao/manutencao.component';
import { ProjetosComponent } from '../projetos/projetos.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarrosselComponent, ProjetosComponent, ManutencaoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isVisible = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const element = document.querySelector('.fade-element');
    if (element) {
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight) {
        this.isVisible = true;
      }
    }
  }
  onScroll(): void {
    const element = document.querySelector('.rotate-in-element') as HTMLElement;

    if (element) {
      const position = element.getBoundingClientRect();

      // Verificando se o elemento está visível na tela
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        this.isVisible = true; // Ativa a animação quando o elemento ficar visível
      } else {
        this.isVisible = false; // Desativa a animação quando o elemento não estiver visível
      }
    }
  }
}
