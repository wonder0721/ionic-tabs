import { Component, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import Swiper from 'swiper';
import { response } from './mock';

/**
 * Generated class for the TopbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topbar',
  templateUrl: 'topbar.html',
})
export class TopbarPage {
  @ViewChildren(Content) contentList: QueryList<Content>;

  swiperNav: any;
  swiper: any;
  subjects: any[] = [];
  navIndex: number;
  // 首屏索引
  firstEntryIndex: number = 1;
  isshow: boolean = true;
  itemsData: any[] = [];
  showSwiper: boolean = true;
  swiperInit: boolean = false;
  status: any = undefined;
  res: any = response;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.navIndex = this.firstEntryIndex;
  }

  ionViewDidLoad() {
    setTimeout(() => {
      // 模拟请求接口延迟
      this.doRefresh();
      // this.subjects = [];
    }, 300);
  }

  init() {
    // 延迟等待DOM动态渲染swiper
    setTimeout(() => {
      this.initSwiper();
      this.patchItemsByIndex(this.firstEntryIndex);
    }, 200);
  }

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
      // autoHeight: true, /* 高度bug */
      initialSlide: 1, /* activeIndex bug */
      passiveListeners: true,
      watchOverflow: true,
      resistanceRatio: 0.5,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      thumbs: {
        swiper: this.swiperNav,
      },
      on: {
        slideChange: () => {
          if (this.swiper) {
            this.navIndex = this.swiper.activeIndex;
            this.swiperNav.slideTo(this.navIndex - 2);
            this.itemsData[this.swiper.activeIndex] == undefined && this.patchItemsByIndex(this.swiper.activeIndex);
          }
        }
      },
    });

    // 初始化轮播图位置
    // this.swiper.activeIndex = this.firstEntryIndex;
    this.swiperInit = true;
    this.contentList.forEach((item) => {
      item.resize();
    })
  }

  goSubject(i) {
    if (!this.swiperInit) {
      return;
    }
    this.navIndex = i;
    this.swiper.slideTo(i);
  }

  // 发送请求
  patchItemsByIndex(index: number, event?) {
    this.status = undefined;
    setTimeout(() => {
      this.itemsData[index] = [index, index, index, index, index, index, index, index, index];
      event && event.complete();
    }, 500)
  }

  filter() {
    this.navCtrl.push('VideotypePage', { data: this.res });
  }

  doRefresh(event?) {
    // 模拟请求接口延迟
    setTimeout(() => {
      if (this.res.data && this.res.data.data) {
        this.subjects = JSON.parse(JSON.stringify(this.res.data.data));
        this.subjects.unshift({ "typeName": "收藏" }, { "typeName": "全部" });
      };
      if (this.showSwiper) {
        this.itemsData.length = this.subjects.length;
        !this.itemsData.length && (this.status = null);
      }
      this.subjects && this.subjects.length && this.init();
      event && event.complete();
    }, 200);
  }

  doInfinite(event?) {
    setTimeout(() => {
      this.itemsData[this.navIndex] = this.itemsData[this.navIndex].concat([1, 2, 3, 4, 5]);
      event.complete();
    }, 1000)
  }

  ionViewWillLeave() {
    this.isshow = false;
    // 退出时swiper没有渲染的话阻止swiper渲染防止显示出bug
    this.showSwiper = false;
  }

  ionViewWillEnter() {
    this.isshow = true;
  }

}
