import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyswiperPage } from './myswiper';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    MyswiperPage,
  ],
  imports: [
    IonicPageModule.forChild(MyswiperPage),
    ComponentsModule,
  ],
})
export class MyswiperPageModule {}
