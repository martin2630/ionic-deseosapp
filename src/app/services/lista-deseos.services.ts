import { Injectable } from '@angular/core';
import { Lista } from '../models/listas';


@Injectable()
export class ListaDeseosServices{
  listas: Lista[] = [];

  constructor() {

    this.cargarData();
  }

  actualizarData(){

    localStorage.setItem('data', JSON.stringify(this.listas))
  }

  cargarData() {
    if (localStorage.getItem('data')){
      this.listas = JSON.parse(localStorage.getItem('data'));
    }

  }

  agregarLista(lista: Lista) {
    this.listas.push(lista);
    this.actualizarData();
  }

  eliminarLista(idx: number) {
    this.listas.splice(idx, 1);
    this.actualizarData();
  }

}
