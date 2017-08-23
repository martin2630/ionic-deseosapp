import {Pipe, PipeTransform} from '@angular/core';
import { Lista } from '../models/listas';

@Pipe({
  name: 'pendientes',
  pure: false
})
export class PendientesPipes implements PipeTransform{
  transform(listas:Lista[], estado: boolean =  false): Lista[]{
    let nuevaLista: Lista[] = [];

    for (let lista of listas) {
      if (lista.complete == estado) {
        nuevaLista.push(lista)
      }
    }
    return nuevaLista;
  }

}
