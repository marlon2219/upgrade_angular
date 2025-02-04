import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormularioComponent } from "./components/formulario/formulario.component";
import { BlogComponent } from "./components/blog/blog.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormularioComponent, BlogComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica_angular';
}
