import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgModule } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nuevoProducto = {};
  productos: any;

  constructor(public navCtrl: NavController) {
    this.productos=[
      {nombre:"Jabon Uno",precio:12.5},
      {nombre:"Arroz Integral",precio:7.5},
      {nombre:"Pollo Entero Imba",precio:56},
    ]
  }

  insertar(){
    this.productos.push(this.nuevoProducto);
    this.nuevoProducto = {};
  }

}
