import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DestinoPageModule } from '../pages/destino/destino.module';
import { AdicionarPage } from '../pages/adicionar/adicionar';

import {HttpModule} from "@angular/http";
import { BookProvider } from '../providers/book/book';
import { ListaLivrosApiPage } from '../pages/lista-livros-api/lista-livros-api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdicionarPage,
    ListaLivrosApiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DestinoPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdicionarPage,
    ListaLivrosApiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BookProvider
  ]
})
export class AppModule {}
