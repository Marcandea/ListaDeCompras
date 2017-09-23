import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgModule } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  productos=[
    {id:1,nombre:"Jabon Uno",precio:12.5},
    {id:2,nombre:"Arroz Integral",precio:7.5},
    {id:3,nombre:"Pollo Entero Imba",precio:56},
    {id:4,nombre:"Atun",precio:6},
    {id:5,nombre:"Aceite Litro",precio:15}
]

  listaCompra=[{idCompra:1,productos:[],total:0}]

  constructor(public navCtrl: NavController) {

  }

}
