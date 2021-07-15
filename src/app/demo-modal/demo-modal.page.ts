import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-demo-modal',
  templateUrl: './demo-modal.page.html',
  styleUrls: ['./demo-modal.page.scss'],
})
export class DemoModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  closeModal() {
    this.modalController.dismiss();
  }

}
