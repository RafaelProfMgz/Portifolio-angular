import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrossel',
  imports: [CommonModule],
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css'],
})
export class CarrosselComponent {
  icons = [
    'assets/icons/html.png',
    'assets/icons/css-3.png',
    'assets/icons/js.png',
    'assets/icons/bootstrap.png',
    'assets/icons/typescript.png',
    'assets/icons/github.png',
    'assets/icons/c-.png',
    'assets/icons/c-sharp.png',
    'assets/icons/nodejs.png',
    'assets/icons/mysql.png',
  ];

  get duplicatedIcons() {
    return [
      ...this.icons,
      ...this.icons,
      ...this.icons,
      ...this.icons,
      ...this.icons,
      ...this.icons,
      ...this.icons,
    ];
  }
}
