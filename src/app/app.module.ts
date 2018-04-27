import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CallNumber } from '@ionic-native/call-number';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { Geolocation } from '@ionic-native/geolocation';
import { SocialSharing } from '@ionic-native/social-sharing';
import { GoogleMaps } from '@ionic-native/google-maps';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ComponentsModule } from '../components/components.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TempatProvider } from '../providers/tempat/tempat';
import { UmumProvider } from '../providers/umum/umum';
import { KontakProvider } from '../providers/kontak/kontak';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    CallNumber,
    LaunchNavigator,
    Geolocation,
    SocialSharing,
    GoogleMaps,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TempatProvider,
    UmumProvider,
    KontakProvider
  ]
})
export class AppModule {

  constructor(private screenOrientation: ScreenOrientation){
    this.lockScreenOrientation();
  }

   lockScreenOrientation(){
    try{  
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }catch(err){
      console.error(err);
    }
  }

}
