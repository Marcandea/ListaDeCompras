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
  totalP: any;
  constructor() {
    this.productos=[
      {nombre:"",precio:null}
    ]
  }
  insertar(){
    this.productos.push(this.nuevoProducto);
    this.nuevoProducto={};
    this.total();
  }
  total():number{
    let sumaTotal=0;
    for(let item of this.productos){
      sumaTotal+=Number.parseInt(item.precio);
    }
    this.totalP=sumaTotal;
    return this.totalP;
  }
}
