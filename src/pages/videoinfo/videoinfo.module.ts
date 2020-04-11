import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoinfoPage } from './videoinfo';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    VideoinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoinfoPage),
    ComponentsModule,
  ],
})
export class VideoinfoPageModule {}
