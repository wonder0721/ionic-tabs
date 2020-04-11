import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import Swiper from 'swiper';

/**
 * Generated class for the MyswiperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myswiper',
  templateUrl: 'myswiper.html',
})
export class MyswiperPage {
  @ViewChild(Content) content: Content;

  swiperNav: any;
  swiper: any;
  subjects: any[];
  navIndex: number = 1;
  navArray: any[];
  // 页面宽度
  contentWidth: number;
  // 导航栏总宽度
  navWidth: number = 0;
  // 导航栏向左侧移动距离
  wrapperLeft: number = 0;
  isshow: boolean = true;
  nav: HTMLElement;
  RP: number;
  itemsData: any[] = [];
  itemIndex: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private elementRef: ElementRef
  ) {

  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.subjects = ['收藏', '全部', '新人', '入职', '市场', '分享', '好书', '共读', '运营策略', '阅卷系统'];
      this.subjects.forEach(() => {
        this.itemsData.push(undefined);
      })
      setTimeout(() => {
        this.init();
        setTimeout(() => { this.patchItemsByIndex(1); }, 1000)

      }, 100);
    }, 300);
  }

  init() {
    this.swiperNav = new Swiper('#swiper-nav', {
      slidesPerView: 'auto',
      resistance: true,
      resistanceRatio: 0.7,
      freeMode: true,
      freeModeSticky: true,
      // centeredSlides: true,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      slideToClickedSlide: false,
      watchOverflow: true,
      watchSlidesVisibility: true,/*避免出现bug*/
    });

    this.swiper = new Swiper('#swiper', {
      // autoHeight: true, /* 高度bug */
      height: 500,
      passiveListeners: true,
      slidesPerView: 1,
      watchOverflow: true,
      resistanceRatio: 0.7,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      on: {
        slideChange: () => {
          this.navIndex = this.swiper.activeIndex;
          this.adaptation(this.swiper.activeIndex);
          this.content.scrollToTop(0);
          this.itemsData[this.swiper.activeIndex] == undefined && this.patchItemsByIndex(this.swiper.activeIndex)
        }
      },
    });

    // 初始化轮播图位置

    setTimeout(() => {
      this.getPageparams();
      this.swiper.activeIndex = 1;
    }, 200)
  }

  goSubject(i) {
    this.navIndex = i;
    this.swiper.slideTo(i);
  }

  // 调整导航栏位置
  adaptation(i) {
    // console.log(this.navArray[i].offsetWidth / 2, this.navArray[i].offsetLeft, this.contentWidth / 2);

    // 点击item在右边
    if (this.navArray[i].offsetWidth / 2 + this.navArray[i].offsetLeft - this.contentWidth / 2 > 0) {
      let distance = this.navArray[i].offsetWidth / 2 + this.navArray[i].offsetLeft - this.contentWidth / 2;
      // 右边有足够的空间向左移动
      if (this.navWidth - this.contentWidth > distance) {
        this.nav.style.transitionDuration = "300ms";
        this.nav.style.transform = `translate3d(${- distance}px, 0px, 0px)`;
        this.wrapperLeft = distance;
      }
      else {
        this.nav.style.transitionDuration = "300ms";
        this.nav.style.transform = `translate3d(-${this.RP}px, 0px, 0px)`;
        this.wrapperLeft = this.RP;
      }
    }

    // 点击item在左边
    else if (this.contentWidth / 2 - this.navArray[i].offsetLeft - this.navArray[i].offsetWidth / 2 > 0) {
      this.nav.style.transitionDuration = "300ms";
      this.nav.style.transform = "translate3d(0px, 0px, 0px)";
      this.wrapperLeft = 0;
    }
    // console.log(this.wrapperLeft);
  }
  // 获取页面参数
  getPageparams() {
    // 获取页面宽度
    this.contentWidth = document.body.clientWidth;
    // 获取导航菜单总宽度
    this.subjects && (this.navArray = Array.from(document.getElementsByClassName('swiper-slide')).slice(0, this.subjects.length));
    // 获取轮播图swiper-wrapper元素
    this.nav = this.elementRef.nativeElement.querySelector('#nav') as HTMLElement;
    this.getNavwidth();
    // 导航栏向左滑动的最大距离 8是外部toobar左右padding值
    this.RP = this.navWidth - this.contentWidth + 8;
    console.log('RP:' + this.RP);
  }
  // 获取导航栏所有项目总宽度
  getNavwidth() {
    this.navWidth = 0;
    this.navArray.forEach((item) => {
      this.navWidth += item.offsetWidth
    })
    this.navWidth = this.navWidth + this.subjects.length * 25 + 16;
  }
  // 发送请求对应item的数据
  patchItemsByIndex(activeIndex: number) {
    setTimeout(() => { this.itemsData[activeIndex] = activeIndex.toString(); }, 1000)

  }

  filter() {
    this.navCtrl.push('NavthirdPage');
  }

  ionViewWillLeave() {
    this.isshow = false;
  }

  ionViewWillEnter() {
    this.isshow = true;
  }

  doRefresh(event) {
    setTimeout(() => {
      console.log('done');
      event.complete();
    }, 1000)
  }

}
