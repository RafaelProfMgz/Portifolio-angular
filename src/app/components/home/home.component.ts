import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
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
}
