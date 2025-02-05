
import { Component, inject } from '@angular/core';
import { IPost } from '../../interfaces/ipost';
import { ICategory } from '../../interfaces/icategory';
import { BlogService } from '../../services/blog.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  blogService = inject(BlogService);
  
  postForm: FormGroup;

  constructor() {
    this.postForm = new FormGroup({
      titulo: new FormControl("", [
        Validators.required
      ]),
      texto: new FormControl("", [
        Validators.required
      ]),
      imagen: new FormControl("", [
        Validators.required
      ]),
      categoria:new FormControl(null, [
        Validators.required
      ]),
      autor: new FormControl("", [
        Validators.required
      ]),
      fecha: new FormControl("", [
        Validators.required
      ]),
     
    },[])
  }

  setDataPost() {
    //cuando tengo los datos del formulario, llamar al servicio, enviar los datos y gestionar la respuesta.
     this.blogService.insertPost(this.postForm.value);
    alert("muy bien");
    this.postForm.reset();

  }

  submit() {
    if (this.postForm.valid) {
      console.log(this.postForm.value);
      this.blogService.insertPost(this.postForm.value as IPost);
     
    }
  }
}

