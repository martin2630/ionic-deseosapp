import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { PendientesPage } from '../pages/pendientes/pendientes';
import { TerminadosPage } from '../pages/terminados/terminados';
import { AgregarPage } from '../pages/agregar/agregar';
import { TabsPage } from '../pages/tabs/tabs';


// services
import { ListaDeseosServices } from './services/lista-deseos.services';


//pipes
import {PlaceholderPipes} from './pipes/placeholder.pipes';
import {PendientesPipes} from './pipes/pendientes.pipe';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DetailPage } from "../pages/detail/detail";

@NgModule({
  declarations: [
    MyApp,
    PlaceholderPipes,
    PendientesPipes,
    AboutPage,
    ContactPage,
    HomePage,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    DetailPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    DetailPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseosServices,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
