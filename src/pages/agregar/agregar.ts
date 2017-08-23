import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaItem, Lista } from '../../app/models/index';
import { AlertController } from 'ionic-angular';
import { ListaDeseosServices } from "../../app/services/lista-deseos.services";


@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html'
})
export class AgregarPage {
  nombreLista; string;
  nombreItem: string;
  items: ListaItem[] = [];
  item: ListaItem;
  lista: Lista;


  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public _listaDeseosServices: ListaDeseosServices
  ) {
    this.nombreItem = '';
    this.item = new ListaItem('');
    this.lista = new Lista('');


  }

  agregar(){

    this.items.push(this.item);
    this.item = new ListaItem('');

  }

  eliminar(idx: number){
    this.items.splice(idx, 1);
  }

  guardarLista(){

    if (this.lista.name.length == 0 ) {
      this.showAlert('el campo name es obligatorio', 'escribir lo que sea', 'OK')
      return;
    }
    if (this.items.length > 0 ) {
      this.lista.items = this.items;
    }

    this._listaDeseosServices.agregarLista(this.lista);
    this.lista = new Lista('');
    this.navCtrl.pop();

  }

  showAlert(title: string, subTitle: string, textButton: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: [textButton]
    });
    alert.present();
  }

}
