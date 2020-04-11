import { Component, ViewChild } from '@angular/core';
import { IonicPage, Tabs, } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild(Tabs) tabs: Tabs;
  tab1Root = 'HomePage';
  tab2Root = 'AboutPage';
  tab3Root = 'UserPage';

  constructor() {}

}
