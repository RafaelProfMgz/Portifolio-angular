import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css',
})
export class ProjetosComponent {
  // Configuração do carrossel (opcional)
  carouselConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Dados dos projetos
  projetos = [
    {
      titulo: 'Projeto 1',
      subtitulo: 'Aplicação Web',
      descricao:
        'Este é um projeto de aplicação web utilizando Angular e Bootstrap.',
      link: 'https://www.exemplo.com',
      gitLink: 'https://github.com/seu-repositorio',
      carrossel: [
        {
          tipo: 'imagem',
          src: 'assets/projeto1-imagem1.jpg',
          titulo: 'Imagem 1',
        },
        {
          tipo: 'imagem',
          src: 'assets/projeto1-imagem2.jpg',
          titulo: 'Imagem 2',
        },
        {
          tipo: 'video',
          src: 'assets/projeto1-video.mp4',
          titulo: 'Vídeo de Demonstração',
        },
      ],
    },
    {
      titulo: 'Projeto 2',
      subtitulo: 'Site Responsivo',
      descricao:
        'Projeto de site responsivo desenvolvido com HTML, CSS e JavaScript.',
      link: 'https://www.exemplo.com',
      gitLink: 'https://github.com/seu-repositorio',
      carrossel: [
        {
          tipo: 'imagem',
          src: 'assets/projeto2-imagem1.jpg',
          titulo: 'Imagem 1',
        },
        {
          tipo: 'video',
          src: 'assets/projeto2-video.mp4',
          titulo: 'Vídeo de Demonstração',
        },
      ],
    },
  ];
}
