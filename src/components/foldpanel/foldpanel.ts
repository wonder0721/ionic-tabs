import { Component, Input, ElementRef, ViewChild } from '@angular/core';

/**
 * Generated class for the FoldpanelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'foldpanel',
  templateUrl: 'foldpanel.html'
})
export class FoldpanelComponent {

  @ViewChild('intro') intro: ElementRef;
  @Input() text: string = '默认内容';
  // 收起时展示的行数，默认2行
  @Input() line: number = 2;
  // 初始化时是否显示全部
  @Input() showTotal: boolean = true;
  @Input() fontSize: number = 14;
  // 展开后是否显示收起按钮，默认不显示
  @Input() canBack: boolean = false;

  length: number;
  foldContent: string;
  showbtn: boolean = false;
  height: any;

  textStyle: any

  constructor() {
  }

  ngAfterViewInit() {

    // this.textStyle = {
    //   "font-size": `${this.fontSize}px`,
    // }

    setTimeout(() => {

      // this.fixbug();
      // console.dir(document.getElementById("intro"));
      // var style = window.getComputedStyle(document.getElementById("intro"), null);
      // var h = style.getPropertyValue('height');
      // console.log(h);

      let height = Number(document.getElementById("intro").offsetHeight);
      // console.log(height);
      if (height > this.line * 20) {
        this.length = Math.floor(this.intro.nativeElement.getClientRects()[0].width * this.line / this.fontSize);
        this.foldContent = this.text.substr(0, this.length - 5);
        // this.showbtn = this.text.length > this.foldContent.length ? true : false;
        this.showbtn = true;
        this.showTotal = false;
        // console.log('>', height);
      }
      else {
        this.showbtn = false;
        this.showTotal = true;
        // console.log('<', height);
      }

      // console.log('总长度：' + this.text.length, '两行字字长度：' + this.length, this.foldContent, this.foldContent.length);

    }, 100)
  }

  changeStatus() {
    this.showTotal = !this.showTotal;
    this.showbtn = true;
    if (this.showTotal) {
      this.showbtn = this.canBack;
    }
  }

  fixbug() {
    this.height = document.getElementById("intro").offsetHeight;
    console.log(this.height);
    if (this.height <= this.line * 20) {
      return;
    }
    else {
      this.foldContent.substr(0, this.foldContent.length - 1);
      this.fixbug();
    }
  }

}
