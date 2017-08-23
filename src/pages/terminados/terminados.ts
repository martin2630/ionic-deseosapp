import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosServices } from '../../app/services/lista-deseos.services';
import { AgregarPage } from '../agregar/agregar';
import { Lista } from '../../app/models/index';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.html'
})
export class TerminadosPage {
  public listas: Lista[] = [];

  constructor(
    public navCtrl: NavController,
    public _listaDeseosServices:ListaDeseosServices
  ) {

  }

  verDetalle(lista: Lista, idx) {
    this.navCtrl.push( DetailPage, { lista, idx });
  }

}
