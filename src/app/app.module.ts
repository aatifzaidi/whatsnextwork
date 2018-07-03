import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WhatsnextPage } from '../pages/whatsnext/whatsnext';
import { TasksPage } from '../pages/tasks/tasks';
import { CreatePage } from '../pages/create/create';
import { DataProvider } from '../providers/data/data';
import { IonicStorageModule } from '@ionic/storage';
import { ItemDetailPage } from '../pages/item-detail/item-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WhatsnextPage,
    TasksPage,
    CreatePage,
    ItemDetailPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WhatsnextPage,
    TasksPage,
    CreatePage,
    ItemDetailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
