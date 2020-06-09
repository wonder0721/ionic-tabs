import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('intro') intro: ElementRef;

  content: string;
  length: number;
  message: string = '暂无发布信息'
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
  ) {
    events.subscribe('test', (params, time) => {
      console.log(`catch message from ${params} at ${time}`)
      this.message = `catch message from ${params} at ${time}`
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.length = Math.round(+this.intro.nativeElement.getClientRects()[0].width * 2 / 14) - 6;
  //     this.content = this.introduction.substr(0, this.length);
  //     // console.log(this.length,this.content)
  //   }, 100)
  // }

  goTest(n) {
    switch (n) {
      case 1:
        this.goPage('TestPage');
        break;
      case 2:
        this.goPage('PopendPage');
        break;
      case 3:
        this.goPage('SwipersPage');
        break;
      case 4:
        this.goPage('VideoinfoPage');
        break;
      case 5:
        this.goPage('NavcontrolPage');
        break;
      case 6:
        this.goPage('BrowserPage');
        break;
      default:
        console.log('go')
    }
  }

  goPage(page: string) {
    this.navCtrl.push(page);
  }

}
