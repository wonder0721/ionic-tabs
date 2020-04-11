import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Swiper from 'swiper';

/**
 * Generated class for the VideoinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videoinfo',
  templateUrl: 'videoinfo.html',
})
export class VideoinfoPage {

  swiperSlide: any;
  active: boolean = true;
  lineStyle: any;
  showFooter: boolean = true;
  text: string = '近日，乌克兰一架波音客机当天从德黑兰霍梅尼国际机场起飞后不久坠毁，737名乘客和名26机组人员不幸全部遇难，而在名乘客中包括63名加拿大人。';
  canback: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoinfoPage');
  }

  doRefresh(event?){
    setTimeout(() => {
      event && event.complete();
    },1000)
  }

  doInfinite(event){
    setTimeout(() => {
      event && event.complete();
    },1000)
  }

  ngAfterViewInit() {
    this.swiperSlide = new Swiper('#swiper', {
      on: {
        slideChange: () => {
          console.log(this.swiperSlide.activeIndex);
          if (this.swiperSlide.activeIndex === 0) {
            this.active = true;
            this.showFooter = true;
          }
          if (this.swiperSlide.activeIndex === 1) {
            this.active = false;
            this.showFooter = false;
          }
        },
        touchMove: () => {
          this.lineStyle = {
            "left": `calc(${ this.swiperSlide.progress * 50 + 25 }vw - 15px)`,
          }
        },
        transitionStart: () => {
          this.lineStyle = {
            "left": `calc(${ this.swiperSlide.activeIndex * 50 + 25 }vw - 15px)`,
            "transition": "all 0.2s linear"
          }
        }
      },
      resistanceRatio : 0.7,
      watchSlidesProgress : true,
    });
  }

  toInfo(){
    this.swiperSlide.slideTo(0);
    this.active = true;
  }

  toCommets(){
    this.swiperSlide.slideTo(1);
    this.active = false;
  }

}
