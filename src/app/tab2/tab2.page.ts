import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public lists = [];

  constructor(
    public storage: Storage,
    public navCtrl: NavController,
  ) {}

  async ionViewWillEnter() {
    this.storage.get('lists').then((list) => {
      this.lists = JSON.parse(list);
    });
  }
}
