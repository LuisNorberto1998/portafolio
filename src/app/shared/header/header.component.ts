import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  navbarOpen = false; // Variable para controlar el estado del navbar-toggler

  constructor() { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  scrollToInicio(section: string) {
    // Implementa la lógica para hacer scroll a la sección deseada
  }

  setMode(mode: string) {
    // Método para cambiar el modo (light o dark)
    if (mode === 'light') {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light'); // Opcional: Guardar el tema en localStorage
    } else if (mode === 'dark') {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark'); // Opcional: Guardar el tema en localStorage
    }
  }

}
