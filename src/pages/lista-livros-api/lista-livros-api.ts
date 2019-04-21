import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookProvider } from '../../providers/book/book';
import { Livro } from '../../model/livro';


/**
 * Generated class for the ListaLivrosApiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-livros-api',
  templateUrl: 'lista-livros-api.html',
  providers: [
    BookProvider
  ]
})
export class ListaLivrosApiPage {

  public livros: Livro[];
  public lista_livros = new Array<any>();
  public lista_hash = new Array<any>();
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private bookProvider: BookProvider) {
    var livro1 = {
      nome: 'Poderoso Chefão',
      subtitulo: 'Poderoso Chefão',
      capa: 'Padrao',
      editora: 'Companhia das Letras',
      autor: 'Jorjão',
      isbn: '19191991',
      publicacao: '1999',
      paginas: '300'
    };
    this.livros = [livro1];
  }

  

  ionViewDidLoad() {
    this.bookProvider.getSomeBooks().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);

        for (var val in objeto_retorno){
          console.log(val);
          this.lista_livros.push(objeto_retorno[val]);
        }
        console.log(this.lista_livros.length)
      }, error => {
        console.log(error)
      }
    )
    console.log('ionViewDidLoad ListaLivrosApiPage');
  }

}
