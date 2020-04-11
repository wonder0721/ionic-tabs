import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Swiper from 'swiper';

/**
 * Generated class for the ThumbsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thumbs',
  templateUrl: 'thumbs.html',
})
export class ThumbsPage {

  swiperNav: any;
  swiper: any;
  subjects: any[] = [];
  navIndex: number;
  // 首屏索引
  firstEntryIndex: number = 0;
  itemsData: any[] = [];
  showSwiper: boolean = true;
  swiperInit: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.navIndex = this.firstEntryIndex;
    this.subjects = ['收藏', '全部', '新人入职', '好书共读', '这段话有七个字', '阅卷系统', '五个字标题', '憨豆先生'];
    this.itemsData.length = this.subjects.length;
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.initSwiper();
      this.patchItemsByIndex(this.firstEntryIndex);
    }, 300);
  }

  // 初始化轮播图
  initSwiper() {
    this.swiperNav = new Swiper('#swiper-nav', {
      slidesPerView: 'auto',
      resistance: true,
      resistanceRatio: 0.7,
      freeMode: true,
      freeModeSticky: true,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      watchOverflow: true,
      watchSlidesVisibility: true,/*避免出现bug*/
    });

    this.swiper = new Swiper('#swiper', {
      passiveListeners: true,
      slidesPerView: 1,
      watchOverflow: true,
      resistanceRatio: 0.4,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      thumbs: {
        swiper: this.swiperNav,
      },
      on: {
        slideChange: () => {
          // this.swiperNav.slideTo(this.swiper.activeIndex - 2);
          this.itemsData[this.swiper.activeIndex] == undefined && this.patchItemsByIndex(this.swiper.activeIndex);
        }
      },
    });

    // 初始化轮播图位置
    setTimeout(() => {
      this.swiper.activeIndex = this.firstEntryIndex;
      this.swiperInit = true;
    }, 200);
  }

  // 发送请求
  patchItemsByIndex(index: number, event?) {
    setTimeout(() => {
      this.itemsData[index] = index.toString();
      event && event.complete();
    }, 1000)
  }

  filter() {
    this.navCtrl.push('NavthirdPage');
  }

  ionViewWillLeave() {
    // 退出时swiper没有渲染的话阻止swiper渲染防止显示出bug
    this.showSwiper = false;
  }

}
