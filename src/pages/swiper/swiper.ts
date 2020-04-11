import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ViewController } from 'ionic-angular';
import Swiper from 'swiper';

/**
 * Generated class for the SwiperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-swiper',
  templateUrl: 'swiper.html',
})
export class SwiperPage {
  @ViewChild(Content) content: Content;

  swiperSlide: any;
  segIndex: string = '0';
  data: number[] = [];
  show: boolean = false;
  items: any[] = [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.data = [1, 2, 3]
      setTimeout(() => {
        this.Init();
      }, 200)
    }, 300)
  }

  segmentChanged(e?) {
    this.swiperSlide.slideTo(Number(e.value));
  }

  Init() {
    this.swiperSlide = new Swiper('#swiper', {
      on: {
        slideChange: () => {
          this.segIndex = this.swiperSlide.activeIndex.toString();
          // console.log(this.content)
          // this.content.resize();
        }
      }
    });
  }

  doRefresh(e?) {
    setTimeout(() => {
      e && e.complete();
    }, 1000)
  }

  doInfinite(event){
    setTimeout(() => {
      let i = this.swiperSlide.activeIndex;
      this.items[i] = this.items[i].concat([1,2,3,4,5]);
      console.log(this.content)
      event.complete();
    }, 1000)
  }

  go(){
    // this.navCtrl.push('NavthirdPage');
    this.items[this.swiperSlide.activeIndex] = this.items[this.swiperSlide.activeIndex].concat([1,2,3,4,5]);
  }

}
