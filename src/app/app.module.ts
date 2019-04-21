import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DestinoPageModule } from '../pages/destino/destino.module';
import { AdicionarPage } from '../pages/adicionar/adicionar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdicionarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DestinoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdicionarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
