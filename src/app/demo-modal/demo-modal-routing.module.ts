import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoModalPage } from './demo-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DemoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoModalPageRoutingModule {}
