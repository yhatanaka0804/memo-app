import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public items: string;
  list: {
    content: string,
    date: number;
  };

  constructor(
    private storage: Storage,
  ) {}

  async ionViewWillEnter() {
    this.storage.get('items').then((items) => {
      this.items = items ? items : [];
    });
  }

  check(val: string): void {
    this.storage.set('items', this.items).then(() => {
    });
  }

  addMemo() {
    this.storage.set('items', this.items).then(() => {
    });
  }

  ionViewWillLeave() {
    this.addMemo();
  }

}
