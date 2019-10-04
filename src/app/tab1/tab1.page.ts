import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public items: string;
  public list: {
    content: string,
    date: Date;
  };
  public lists: [] = [];

  constructor(
    private storage: Storage,
  ) {}

  async ionViewWillEnter() {
    this.storage.get('items').then((items) => {
      this.items = items ? items : [];
    });
    this.storage.get('lists').then((list) => {
      this.lists = list ? list : [];
    });
  }

  addMemo() {
    this.storage.set('items', this.items).then(() => {
    });
  }

  ionViewWillLeave() {
    this.addMemo();
  }
/*
  saveMemo() {
    this.list = [{
      content: this.items,
      date: new Date()
    }];
    if (this.list) {
      // 入力があればそれを追加する
      this.lists.push(this.list);
    }
    this.storage.set('lists', this.list).then(() => {
    });
  }
*/
}
