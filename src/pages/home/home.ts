import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Livro } from '../../model/livro';
import { DestinoPage } from '../destino/destino';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
  public livros: Livro[];

  constructor(public navCtrl: NavController) {
    this.livros = [];

    var l1 = { nome: '1984', autor: 'George Orwell' };
    var l2 = { nome: 'Harry Potter e as reliquias da morte', autor: 'J. K. Rowling' };
    var l3 = { nome: 'O Senhor dos Anéis', autor: 'J. R. R. Tolkien' };
    var l4 = { nome: 'Fundação', autor: 'Isaac Asimov' };
    var l5 = { nome: 'Neuromancer', autor: 'William Gibson' };
    var l6 = { nome: 'O Homem do Castelo do Alto', autor: 'Philip K. Dick' };
    var l7 = { nome: 'Snow Crash', autor: 'Neal Stephenson' };
    var l8 = { nome: '2001: Uma Odisséia no Espaço', autor: 'Arthur Clarke' };
    var l9 = { nome: 'Coraline', autor: 'Neal Gaiman' };
    
    this.livros = [l1, l2, l3, l4, l5, l6, l7, l8, l9];
  }

  irParaDestino(livro:Livro):void{
    this.navCtrl.push(DestinoPage, {livroSelecionado: livro});
  }

}
