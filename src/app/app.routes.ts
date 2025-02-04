import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BlogComponent } from './components/blog/blog.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
{ path: '', pathMatch: 'full',component: BlogComponent },
  { path: 'home', component: BlogComponent },
  { path: 'new', component: FormularioComponent },
  { path: 'post/:idpost', component: ViewPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
