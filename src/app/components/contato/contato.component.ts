import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [FormsModule], // Importando FormsModule
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css',
})
export class ContatoComponent {
  contact = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    console.log('Dados do Formulário:', this.contact);
    alert('Mensagem enviada com sucesso!');
  }
}
