import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PopstartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popstart',
  templateUrl: 'popstart.html',
})
export class PopstartPage {

  value: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopstartPage');
  }

  goPrevpage(){
    this.navParams.get('cb')(this.value);
    this.navCtrl.pop();
  }

}
