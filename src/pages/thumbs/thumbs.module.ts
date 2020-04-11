import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThumbsPage } from './thumbs';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    ThumbsPage,
  ],
  imports: [
    IonicPageModule.forChild(ThumbsPage),
    ComponentsModule,
  ],
})
export class ThumbsPageModule {}
