import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SwipersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-swipers',
  templateUrl: 'swipers.html',
})
export class SwipersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SwipersPage');
  }

  goSwiper(i){
    i == 1 && this.navCtrl.push('SwiperPage');
    i == 2 && this.navCtrl.push('MyswiperPage');
    i == 3 && this.navCtrl.push('TopbarPage');
    i == 4 && this.navCtrl.push('ThumbsPage');
  }

}
