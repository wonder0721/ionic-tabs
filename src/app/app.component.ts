import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import VConsole from 'vconsole';
var vConsole = new VConsole;

@Component({
  template: '<ion-nav #rootNav></ion-nav>'
})
export class MyApp {
  @ViewChild('rootNav') rootNav: NavController;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      this.rootNav.setRoot('TabsPage')
        splashScreen.hide();
    });
  }
}
