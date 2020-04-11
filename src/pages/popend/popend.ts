import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PopendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popend',
  templateUrl: 'popend.html',
})
export class PopendPage {

  message: string = ''

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopendPage');
  }

  goNextpage(){
    this.navCtrl.push('PopstartPage', { cb: (params?) => {
      this.message = params?`message has changed to ${params}`:'no change'
    }});
  }

}
