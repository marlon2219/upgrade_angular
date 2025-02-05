
import { Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
        Validators.required,
        Validators.pattern(/^https:\/\/picsum\.photos\/400\/300$/)
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
    this.blogService.insertPost(this.postForm.value);
    alert("Post insertado correctamente");
    this.postForm.reset();

  }
  //validacion
  validate(campo:string){
    return (this.postForm.get(campo)?.invalid && this.postForm.get(campo)?.touched);
  }
}

