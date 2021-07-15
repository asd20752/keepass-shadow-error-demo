import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemoModalPageRoutingModule } from './demo-modal-routing.module';

import { DemoModalPage } from './demo-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemoModalPageRoutingModule
  ],
  declarations: [DemoModalPage]
})
export class DemoModalPageModule {}
