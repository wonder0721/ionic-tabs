import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwiperPage } from './swiper';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    SwiperPage,
  ],
  imports: [
    IonicPageModule.forChild(SwiperPage),
    ComponentsModule,
  ],
})
export class SwiperPageModule {}
