import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClockPage } from './clock';

@NgModule({
  declarations: [
    ClockPage,
  ],
  imports: [
    IonicPageModule.forChild(ClockPage),
  ],
})
export class ClockPageModule {}
