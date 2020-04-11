import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Navbar } from 'ionic-angular';

/**
 * Generated class for the NavfirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navfirst',
  templateUrl: 'navfirst.html',
})
export class NavfirstPage {
  // 属性装饰器，用于配置一个视图查询。 变更检测器会在视图的 DOM 中查找能匹配上该选择器的第一个元素或指令。 如果视图的 DOM 发生了变化，出现了匹配该选择器的新的子节点，该属性就会被更新。在调用 NgAfterViewInit 回调函数之前就会设置这些视图查询
  @ViewChild(Navbar) navbar: Navbar;

  verify: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {

  }

  ionViewDidLoad() {
    console.log(this.navbar);
  }

  ionViewCanLeave() {
    if (this.verify) { return true }
    let alert = this.alertCtrl.create({
      title: '确定要返回吗',
      message: 'Do you want to go back?',
      buttons: [
        {
          text: '取消',
        },
        {
          text: '确定',
          handler: () => {
            this.verify = true;
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
    return false;
  }

  ionViewDidEnter(){
    this.verify = false;
  }

  filter() {
  }

  goSecond(){
    this.verify = true;
    this.navCtrl.push('NavsecondPage');
  }

}
