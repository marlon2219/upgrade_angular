import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
{ path: '', pathMatch: 'full',component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new', component: FormularioComponent },
  { path: 'post/:idpost', component: ViewPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
