import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the NavsecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navsecond',
  templateUrl: 'navsecond.html',
})
export class NavsecondPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavsecondPage');
  }

  goSecret() {
    this.navCtrl.push('NavthirdPage').then((res) => { console.log(res) })
  }

  getNavctrl() {
    console.log(this.navCtrl);
  }

  canGoBack() {
    console.log(this.navCtrl.canGoBack());
  }

  canSwipeBack() {
    console.log(this.navCtrl.canSwipeBack())
  }

  first() {
    console.log(this.navCtrl.first())
  }

  last() {
    console.log(this.navCtrl.last())
  }

  length() {
    console.log(this.navCtrl.length())
  }

  getActive() {
    console.log(this.navCtrl.getActive())
  }

  getByIndex() {
    console.log(this.navCtrl.getByIndex(1))
  }

  // Returns the view controller which is before the given view controller. If no view controller is passed in, then it’ll default to the active view.
  getPrevious() {
    console.log(this.navCtrl.getPrevious())
  }

  // Returns the current stack of views in this nav controller.
  getViews() {
    console.log(this.navCtrl.getViews());
  }

  parent() {
    console.log(this.navCtrl.parent)
  }

  // Navigate back to the root of the stack, no matter how far back that is.
  popToRoot() {
    this.navCtrl.popToRoot()
  }

  // remove(startIndex, removeCount, opts)  Removes a page from the nav stack at the specified index.
  // startIndex: The starting index to remove pages from the stack. Default is the index of the last page.
  // removeCount: The number of pages to remove, defaults to remove 1.
  // opts: Any options you want to use pass to transtion.
  remove() {
    // this.navCtrl.remove(1, 2)
    this.navCtrl.push('NavfirstPage').then(res => {
      setTimeout(() => {
        this.navCtrl.remove(this.viewCtrl.index - 1, 2);
      }, 350);
    })
  }

  // insertPages(insertIndex, insertPages, opts) Inserts an array of components into the nav stack at the specified index. The last component in the array will become instantiated as a view, and animate in to become the active view.
  insert() {
    this.navCtrl.insert(1, 'SwiperPage')
  }

}
