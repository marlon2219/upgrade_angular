import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormularioComponent } from "./pages/formulario/formulario.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormularioComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica_angular';
}
