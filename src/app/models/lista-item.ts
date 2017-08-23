export class ListaItem{
  name: string;
  complete: boolean;

  constructor(nombre: string){
    this.name = nombre;
    this.complete = false;
  }
}
