import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PopoverModule } from 'ngx-bootstrap/popover';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, CarouselModule, PopoverModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css',
})
export class ProjetosComponent {
  itemsPerSlide = 3;
  singleSlideOffset = true;

  projetos = [
    {
      id: 1,
      title: 'Mangaza scan',
      description:
        'Um site completo para fãs de webtoons, manhwa, manhua, comics, novels e mangas, oferecendo uma plataforma para explorar e descobrir novas histórias em diversos formatos',
      Linguagens: [
        {
          icons: [
            {
              src: 'assets/icons/html.png',
              alt: 'HTML Icon',
            },
            {
              src: 'assets/icons/css-3.png',
              alt: 'CSS Icon',
            },
            {
              src: 'assets/icons/js.png',
              alt: 'JavaScript Icon',
            },
            {
              src: 'assets/icons/bootstrap.png',
              alt: 'Bootstrap Icon',
            },
            {
              src: 'assets/icons/typescript.png',
              alt: 'TypeScript Icon',
            },
            {
              src: 'assets/icons/github.png',
              alt: 'GitHub Icon',
            },
            {
              src: 'assets/icons/c-.png',
              alt: 'C Icon',
            },
            {
              src: 'assets/icons/c-sharp.png',
              alt: 'C# Icon',
            },
            {
              src: 'assets/icons/nodejs.png',
              alt: 'Node.js Icon',
            },
            {
              src: 'assets/icons/mysql.png',
              alt: 'MySQL Icon',
            },
          ],
        },
      ],
      link: '',
      gitlink: '',
      media: [
        {
          type: 'image',
          url: 'https://i.pinimg.com/236x/79/a9/78/79a978c0d11e1ce297924738073acae6.jpg',
          alt: 'Imagem de um webtoon',
        },
        {
          type: 'image',
          url: 'https://i.pinimg.com/236x/8a/d6/32/8ad6321629b0416352198b7b5e94df6d.jpg',
          alt: 'Outra imagem de um webtoon',
        },
        {
          type: 'video',
          url: 'https://www.w3schools.com/html/mov_bbb.mp4',
          videoType: 'video/mp4',
          alt: 'Vídeo de exemplo de um webtoon',
        },
      ],
    },
    {
      id: 2,
      title: 'PageJapan',
      description:
        'Uma pagina de noticias em tempo real, conectada a uma api de noticias.Uma pagina de noticias em tempo real, conectada a uma api de noticias.Uma pagina de noticias em tempo real, conectada a uma api de noticias.',
      link: 'https://pagejapan.vercel.app/',
      gitlink: '',
      Linguagens: [
        {
          icons: [
            {
              src: 'assets/icons/html.png',
              alt: 'HTML Icon',
            },
            {
              src: 'assets/icons/css-3.png',
              alt: 'CSS Icon',
            },
            {
              src: 'assets/icons/js.png',
              alt: 'JavaScript Icon',
            },
            {
              src: 'assets/icons/bootstrap.png',
              alt: 'Bootstrap Icon',
            },
            {
              src: 'assets/icons/typescript.png',
              alt: 'TypeScript Icon',
            },
            {
              src: 'assets/icons/github.png',
              alt: 'GitHub Icon',
            },
          ],
        },
      ],
      media: [
        {
          type: 'image',
          url: 'https://i.pinimg.com/236x/38/9b/6b/389b6b21310d110379513a77c59a92e5.jpg',
        },
        {
          type: 'image',
          url: 'https://i.pinimg.com/236x/df/09/33/df09338cb1bcc03f3015c9a0522cd742.jpg',
        },
        {
          type: 'video',
          url: 'https://www.w3schools.com/html/mov_bbb.mp4',
          videoType: 'video/mp4',
        },
      ],
    },
    {
      id: 3,
      title: 'Timpilim',
      description:
        'Um site especializado em produtos eletrônicos, oferecendo descontos, promoções e recomendações de itens como notebooks, placas de vídeo e outros gadgets, para facilitar suas compras com as melhores ofertas',
      link: '',
      gitlink: '',
      Linguagens: [
        {
          icons: [
            {
              src: 'assets/icons/html.png',
              alt: 'HTML Icon',
            },
            {
              src: 'assets/icons/css-3.png',
              alt: 'CSS Icon',
            },
            {
              src: 'assets/icons/js.png',
              alt: 'JavaScript Icon',
            },
            {
              src: 'assets/icons/bootstrap.png',
              alt: 'Bootstrap Icon',
            },
            {
              src: 'assets/icons/typescript.png',
              alt: 'TypeScript Icon',
            },
            {
              src: 'assets/icons/github.png',
              alt: 'GitHub Icon',
            },
            {
              src: 'assets/icons/c-.png',
              alt: 'C Icon',
            },
            {
              src: 'assets/icons/c-sharp.png',
              alt: 'C# Icon',
            },
            {
              src: 'assets/icons/nodejs.png',
              alt: 'Node.js Icon',
            },
            {
              src: 'assets/icons/mysql.png',
              alt: 'MySQL Icon',
            },
          ],
        },
      ],
      media: [
        {
          type: 'image',
          url: 'https://i.pinimg.com/236x/11/12/b6/1112b6ee5aef0ec76209a1cc24c190c0.jpg',
        },
        {
          type: 'image',
          url: 'https://i.pinimg.com/474x/c2/75/a9/c275a9db80bea31c8892a36d3e09e13f.jpg',
        },
        {
          type: 'video',
          url: 'https://www.w3schools.com/html/mov_bbb.mp4',
          videoType: 'video/mp4',
        },
      ],
    },
  ];
}
