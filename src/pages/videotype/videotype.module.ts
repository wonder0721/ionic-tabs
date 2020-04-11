import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideotypePage } from './videotype';

@NgModule({
  declarations: [
    VideotypePage,
  ],
  imports: [
    IonicPageModule.forChild(VideotypePage),
  ],
})
export class VideotypePageModule {}
