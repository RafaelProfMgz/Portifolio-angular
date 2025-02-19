import { Component } from '@angular/core';

@Component({
  selector: 'app-manutencao',
  imports: [],
  templateUrl: './manutencao.component.html',
  styleUrl: './manutencao.component.css',
})
export class ManutencaoComponent {
  ngAfterViewInit() {
    setTimeout(() => {
      document.getElementById('openModalBtn')?.click();
    }, 500); // Pequeno atraso para garantir que o Bootstrap carregue
  }
}
