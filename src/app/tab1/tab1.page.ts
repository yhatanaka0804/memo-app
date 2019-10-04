import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public items: string;
  lists = [];


  constructor(
    private storage: Storage,
  ) {}

  async ionViewWillEnter() {
    // this.storage.clear();
    this.storage.get('items').then((items) => {
      this.items = items;
    });

    this.storage.get('lists').then((list) => {
      if (list) {
      this.lists = JSON.parse(list);
      }
    });

  }

  addMemo() {
    this.storage.set('items', this.items).then(() => {
    });
  }

  ionViewWillLeave() {
    this.addMemo();
  }

  saveMemo() {
    if (this.items) {
    // 日付を付与
      this.lists.push({
        memo: this.items,
        date: new Date(),
      });
      // 入力があればそれを追加する
      this.storage.set('lists', JSON.stringify(this.lists)).then(() => {
      });
    }
  }

}
