import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {
  isshow: boolean;
  title: string;
  guid: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.title = this.navParams.get("title");
    this.guid = this.navParams.get('guid');
    console.log(this.title, this.guid);
  }

  ionViewDidLoad() {
  }

  ionViewWillLeave() {
    this.isshow = false;
  }

  ionViewWillEnter() {
    this.isshow = true;
  }

}
