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
      titulo: 'Arena dorada y mar azul',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in magna ut justo lacinia tincidunt. Donec euismod, nunc nec ultricies ultricies, justo nunc tincidunt nunc, vel aliquet erat odio nec nunc. Sed nec enim nec nunc luctus ultricies. Nullam nec nulla nec nunc luctus ultricies. Nullam nec nulla nec nunc luctus ultricies.',
      autor: 'Juan Pérez',
      imagen: 'https://services.meteored.com/img/article/estos-son-los-tipos-de-playa-segun-su-arena-y-tu-cual-prefieres-1691416109818_512.jpeg',
      fecha: '2021-06-01',
      categoria: { id: 1, titulo: 'Playa' }
    },
    {
      id: 2,
      titulo: 'Aventura en las alturas',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in magna ut justo lacinia tincidunt. Donec euismod, nunc nec ultricies ultricies, justo nunc tincidunt nunc, vel aliquet erat odio nec nunc. Sed nec enim nec nunc luctus ultricies. Nullam nec nulla nec nunc luctus ultricies. Nullam nec nulla nec nunc luctus ultricies.',
      autor: 'Juan Pérez',
      imagen: 'https://www.manasluadventures.com/wp-content/uploads/2016/01/Nepal_annapurna_04.jpg',
      fecha: '2021-06-01',
      categoria: { id: 2, titulo: 'Montaña' }
    },
    {
      id: 3,
      titulo: 'Senderos ocultos',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in magna ut justo lacinia tincidunt. Donec euismod, nunc nec ultricies ultricies, justo nunc tincidunt nunc, vel aliquet erat odio nec nunc. Sed nec enim nec nunc luctus ultricies. Nullam nec nulla nec nunc luctus ultricies. Nullam nec nulla nec nunc luctus ultricies.',
      autor: 'Juan Pérez',
      imagen: 'https://fotografias.larazon.es/clipping/cmsimages02/2025/01/23/099184B8-FC31-46BB-823D-CDEE65D8CDC1/descubre-senderos-ocultos-tenerife-que-dejaran-aliento_98.jpg?crop=1024,576,x0,y81&width=1900&height=1069&optimize=low&format=webply',
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

  // Genera un nuevo ID para un nuevo post
  generarNuevoId(postsArray: { id: number }[]): number {
    return postsArray.length > 0 ? Math.max(...postsArray.map(post => post.id)) + 1 : 1;
  }

  // Devuelve todos los posts de una categoría
  getPostsByCategory(catId: number): IPost[] {
    console.log("entramos en el serviciooo con el id "+catId);
    const posts = this.getAllPosts()
    const p = posts.filter(post => post.categoria.id === catId);
    return posts.filter(post => post.categoria && post.categoria.id === catId);
  }

  getSearchPost(busqueda: string) : IPost[]{
    
    const posts = this.getAllPosts()
      return posts.filter(post =>  post.titulo.toLowerCase().includes(busqueda.toLowerCase()));
  }


  // Devuelve todas las categorías
  getAllCategories(): ICategory[] {
    return this.categories;
  }

  
}