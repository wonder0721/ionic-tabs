import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the VideotypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videotype',
  templateUrl: 'videotype.html',
})
export class VideotypePage {
  @ViewChild(Content) content: Content;
  
  data: any[];
  fIndex: number;
  sIndex: number;
  guid: any;
  show: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.data = JSON.parse(JSON.stringify(this.navParams.get('data').data.data));
    this.data.forEach((item) => {
      item.secondType.unshift({ "typeName": "全部" });
    });
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.show = true;
      setTimeout(() => {
        this.content.resize();
      },200)
    },2000)
  }

  filter(i,j){
    this.fIndex = i;
    this.sIndex = j;
    // console.log(i, j, this.fIndex, this.sIndex);
    let title = this.data[i].typeName + '-' + this.data[i].secondType[j].typeName;
    j == 0 ? (this.guid = this.data[i].guid) : (this.guid = this.data[i].secondType[j].guid);
    this.navCtrl.push("VideosPage", { title, guid: this.guid });
  }

}
