import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavfirstPage } from './navfirst';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    NavfirstPage,
  ],
  imports: [
    IonicPageModule.forChild(NavfirstPage),
    ComponentsModule,
  ],
})
export class NavfirstPageModule {}
