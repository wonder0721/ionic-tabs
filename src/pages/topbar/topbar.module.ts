import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopbarPage } from './topbar';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    TopbarPage,
  ],
  imports: [
    IonicPageModule.forChild(TopbarPage),
    ComponentsModule,
  ],
})
export class TopbarPageModule {}
