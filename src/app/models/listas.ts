import { ListaItem } from './lista-item';

export class Lista{
  name: string;
  complete: boolean;
  items: ListaItem[];

  constructor(nombre: string){
    this.name = nombre;
    this.complete = false;
  }
}
