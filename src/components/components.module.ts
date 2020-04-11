import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { FoldpanelComponent } from './foldpanel/foldpanel';
import { LoadingComponent } from './loading/loading'
@NgModule({
	declarations: [
		FoldpanelComponent,
		LoadingComponent
	],
	imports: [
		CommonModule,
		IonicModule,
	],
	exports: [
		FoldpanelComponent,
		LoadingComponent
	]
})
export class ComponentsModule { }
