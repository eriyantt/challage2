import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
/*  {
      title: 'List',
      url: '/list',
      icon: 'list'
    },*/
    {
      title: 'Login',
      url: '/login',
      icon: 'contact'
    },
    {
      title: 'Produk',
      url: '/product',
      icon: 'cube'
    },
    {
      title: 'Tambah Produk',
      url: '/add-product',
      icon: 'add-circle'
    },
    {
      title: 'Keranjang Belanja',
      url: '/keranjang',
      icon: 'basket'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
