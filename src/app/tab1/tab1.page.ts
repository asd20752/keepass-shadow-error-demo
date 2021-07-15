import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DemoModalPage } from '../demo-modal/demo-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalController: ModalController) { }
  async openModal() {
    let modal = await this.modalController.create({
      component: DemoModalPage
    })
    modal.onDidDismiss().then((modelData) => {
    });

    return await modal.present();
  }
}
