import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwipersPage } from './swipers';

@NgModule({
  declarations: [
    SwipersPage,
  ],
  imports: [
    IonicPageModule.forChild(SwipersPage),
  ],
})
export class SwipersPageModule {}
