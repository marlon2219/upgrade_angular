import { ICategory } from "./icategory";

export interface IPost {
    id: number;
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: string;
    categoria: ICategory;
}
