import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/models/index';
import { ListaDeseosServices } from '../../app/services/lista-deseos.services';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  public lista: Lista;
  public idx: number;

  constructor(
    public navCtrl: NavController,
    public  navParams: NavParams,
    public _listaDeseosServices: ListaDeseosServices,
    public alertCtrl: AlertController
  ) {
    console.log(this.navParams);
    this.idx = this.navParams.get('idx');
    this.lista = this.navParams.get('lista');
  }

  actualizar(item: ListaItem){
    item.complete = !item.complete;
    let todosMarcados = true;

    for (let item of this.lista.items){
      if (!item.complete) {
        todosMarcados = false;
        break;
      }
    }
    this.lista.complete = todosMarcados;
    this._listaDeseosServices.actualizarData();
  }

  borrarItem(){
    this.showConfirm();
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: this.lista.name,
      message: 'Estas seguro de eliminar la lista?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            console.log('Agree clicked');
            this._listaDeseosServices.eliminarLista(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }


}
