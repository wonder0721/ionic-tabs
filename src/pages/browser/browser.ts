import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
declare let cordova: any;

/**
 * Generated class for the BrowserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html',
})
export class BrowserPage {
  link: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private themeableBrowser: ThemeableBrowser,
    private iab: InAppBrowser,
  ) {

  }

  ionViewDidLoad() {
  }

  openLink(val) {
    const options: ThemeableBrowserOptions = {
      statusbar: {
        color: '#ffffff'
      },
      toolbar: {
        height: 44,
        color: '#ffffff',
      },
      title: {
        color: '#414a60ff',
        showPageTitle: true,
        staticText: 'title'
      },
      closeButton: {
        wwwImage: 'assets/icon/back.png',
        wwwImagePressed: 'assets/icon/back.png',
        align: 'left',
        wwwImageDensity: 3
      },
    }
    this.getLink(val);

    const browser: ThemeableBrowserObject = this.themeableBrowser.create(this.link, '_blank', options);

    browser.on('loadstart').subscribe(event => {
      console.log(event);
    });
    browser.on('loadfail').subscribe(event => {
      console.log('fail');
    });
  }

  iabLink(val) {
    this.getLink(val);

    const options = "beforeload=yes"

    const browser = cordova.InAppBrowser.open(this.link, '_blank', options);

    const beforeloadCallBack = function (params, callback) {
      console.log('reload', params)
      if (params.url.startsWith('septnetstudent://tabs/assemble')) {
        callback("https://static.7net.cc/szone/welcome/index.html")
      }
      else if (params.url.startsWith('septnetstudent')) {
        console.log("暂不支持此操作，请在浏览器中打开")
        callback("https://static.7net.cc/szone/welcome/index.html")
      }
      else {
        callback(params.url)
      }
    }

    browser.addEventListener('beforeload', beforeloadCallBack);
  }

  getLink(val) {
    switch (val) {
      case 1:
        this.link = 'https://student-m.7net.cc/activity2/download/assemble/index.html';
        break;
      case 2:
        this.link = 'https://static.7net.cc/szone/welcome/index.html';
        break;
      case 3:
        this.link = 'https://www.baidu.com';
        break;
      default:
        console.log('link')
    }
  }

}
