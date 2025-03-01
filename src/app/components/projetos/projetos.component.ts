import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css',
})
export class ProjetosComponent {
  noWrapSlides = false;
  projetos = [
    {
      id: 1,
      title: 'Card 1',
      description: '',
      link: '',
      gitlink: '',
      media: [
        {
          type: 'image',
          url: 'https://i.pinimg.com/236x/79/a9/78/79a978c0d11e1ce297924738073acae6.jpg',
        },
        {
          type: 'image',
          url: 'https://i.pinimg.com/236x/8a/d6/32/8ad6321629b0416352198b7b5e94df6d.jpg',
        },
        {
          type: 'video',
          url: 'https://www.w3schools.com/html/mov_bbb.mp4',
          videoType: 'video/mp4',
        },
      ],
    },
    {
      id: 2,
      title: 'Card 2',
      description: '',
      link: '',
      gitlink: '',
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
      title: 'Card 3',
      description: '',
      link: '',
      gitlink: '',
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
