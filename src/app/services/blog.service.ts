import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost';
import { ICategory } from '../interfaces/icategory';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  // Array estático de posts
  private posts: IPost[] = [
    {
      id: 1,
      titulo: 'Viaje a la playaaaaa',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in magna ut justo lacinia tincidunt. Donec euismod, nunc nec ultricies ultricies, justo nunc tincidunt nunc, vel aliquet erat odio nec nunc. Sed nec enim nec nunc luctus ultricies. Nullam nec nulla nec nunc luctus ultricies. Nullam nec nulla nec nunc luctus ultricies.',
      autor: 'Juan Pérez',
      imagen: 'https://picsum.photos/200/300',
      fecha: '2021-06-01',
      categoria: { id: 1, titulo: 'Playa' }
    },
    {
      id: 2,
      titulo: 'Viaje a la playa',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in magna ut justo lacinia tincidunt. Donec euismod, nunc nec ultricies ultricies, justo nunc tincidunt nunc, vel aliquet erat odio nec nunc. Sed nec enim nec nunc luctus ultricies. Nullam nec nulla nec nunc luctus ultricies. Nullam nec nulla nec nunc luctus ultricies.',
      autor: 'Juan Pérez',
      imagen: 'https://picsum.photos/200/300',
      fecha: '2021-06-01',
      categoria: { id: 1, titulo: 'Playa' }
    },
    {
      id: 3,
      titulo: 'Viaje a la playa',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in magna ut justo lacinia tincidunt. Donec euismod, nunc nec ultricies ultricies, justo nunc tincidunt nunc, vel aliquet erat odio nec nunc. Sed nec enim nec nunc luctus ultricies. Nullam nec nulla nec nunc luctus ultricies. Nullam nec nulla nec nunc luctus ultricies.',
      autor: 'Juan Pérez',
      imagen: 'https://picsum.photos/200/300',
      fecha: '2021-06-01',
      categoria: { id: 1, titulo: 'Playa' }
    },
    {
      id: 4,
      titulo: 'Viaje a la playa',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in magna ut justo lacinia tincidunt. Donec euismod, nunc nec ultricies ultricies, justo nunc tincidunt nunc, vel aliquet erat odio nec nunc. Sed nec enim nec nunc luctus ultricies. Nullam nec nulla nec nunc luctus ultricies. Nullam nec nulla nec nunc luctus ultricies.',
      autor: 'Juan Pérez',
      imagen: 'https://picsum.photos/200/300',
      fecha: '2021-06-01',
      categoria: { id: 2, titulo: 'Montaña' }
    },
    {
      id: 5,
      titulo: 'madrid',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in magna ut justo lacinia tincidunt. Donec euismod, nunc nec ultricies ultricies, justo nunc tincidunt nunc, vel aliquet erat odio nec nunc. Sed nec enim nec nunc luctus ultricies. Nullam nec nulla nec nunc luctus ultricies. Nullam nec nulla nec nunc luctus ultricies.',
      autor: 'Juan Pérez',
      imagen: 'https://picsum.photos/200/300',
      fecha: '2021-06-01',
      categoria: { id: 2, titulo: 'Montaña' }
    },
    {
      id: 6,
      titulo: 'viaje madrid españa',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in magna ut justo lacinia tincidunt. Donec euismod, nunc nec ultricies ultricies, justo nunc tincidunt nunc, vel aliquet erat odio nec nunc. Sed nec enim nec nunc luctus ultricies. Nullam nec nulla nec nunc luctus ultricies. Nullam nec nulla nec nunc luctus ultricies.',
      autor: 'Juan Pérez',
      imagen: 'https://picsum.photos/200/300',
      fecha: '2021-06-01',
      categoria: { id: 2, titulo: 'Montaña' }
    },
  ];

  // Categorías de ejemplo
  private categories: ICategory[] = [
    { id: 1, titulo: 'Playa' },
    { id: 2, titulo: 'Montaña' },
    { id: 3, titulo: 'Ciudad' },
    { id: 4, titulo: 'Rural' },
    { id: 5, titulo: 'Festivales' }
  ];

  // Devuelve todos los posts
  getAllPosts(): IPost[] {
    return this.posts;
  }

  // Agrega un nuevo post al array
  insertPost(post: IPost) {
    const postData = Object.assign({}, post, { id: this.generarNuevoId(this.posts) });
    this.posts.push(postData);
  }

  // Obtiene un post por su ID
  getPostById(id: number): IPost | undefined {
    return this.posts.find(post => post.id === id);
  }

  generarNuevoId(postsArray: { id: number }[]): number {
    return postsArray.length > 0 ? Math.max(...postsArray.map(post => post.id)) + 1 : 1;
  }

  // Filtra posts por categoría
  //getPostsByCategory(catId: number): IPost[] {
    //return this.posts.filter(post => post.categoria.id === catId);
  //}
  getPostsByCategory(catId: number): IPost[] {
    console.log("entramos en el serviciooo con el id "+catId);
    const posts = this.getAllPosts()
    const p = posts.filter(post => post.categoria.id === catId);
    return posts.filter(post => post.categoria && post.categoria.id === catId);
  }

  getSearchPost(busqueda: string) : IPost[]{
    
    const posts = this.getAllPosts()
    const p = posts.filter(post => post.titulo === busqueda);
    return posts.filter(post =>  post.titulo.toLowerCase().includes(busqueda.toLowerCase()));
  }


  // Devuelve todas las categorías
  getAllCategories(): ICategory[] {
    return this.categories;
  }

  
}