import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  @ViewChild('card') card: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
  ) {
  }

  // ionViewDidLoad - ionViewWillEnter - ionViewDidEnter - ionViewWillLeave - ionViewDidLeave - ionViewWillUnload

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }

  ngAfterViewInit() {
    // this.card.nativeElement.children[0].innerText = 'Header';
    console.log(document.getElementById('card').firstElementChild.innerHTML)
  }

  push(params){
    this.events.publish('test', params, Date.now())
  }

}
