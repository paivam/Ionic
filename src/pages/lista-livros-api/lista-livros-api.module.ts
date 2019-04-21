import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaLivrosApiPage } from './lista-livros-api';

@NgModule({
  declarations: [
    ListaLivrosApiPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaLivrosApiPage),
  ],
})
export class ListaLivrosApiPageModule {}
