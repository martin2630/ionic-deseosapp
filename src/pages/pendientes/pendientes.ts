import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosServices } from '../../app/services/lista-deseos.services';
import { AgregarPage } from '../agregar/agregar';
import { Lista } from '../../app/models/index';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html'
})
export class PendientesPage {
  public listas: Lista[] = [];

  constructor(
      public navCtrl: NavController,
      public _listaDeseosServices:ListaDeseosServices
  ) {

  }

  irAgregar(){
    this.navCtrl.push(AgregarPage);
  }

  verDetalle(lista: Lista, idx) {
    this.navCtrl.push( DetailPage, { lista, idx });
  }

}
