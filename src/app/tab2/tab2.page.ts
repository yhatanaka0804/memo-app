import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, ActionSheetController } from '@ionic/angular';

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
    public actionSheetController: ActionSheetController,
  ) {}

  async ionViewWillEnter() {
    this.storage.get('lists').then((list) => {
      this.lists = JSON.parse(list);
    });
  }

  async delCheck(index: number) {
    const actionSheet = await this.actionSheetController.create({
      header: '削除確認',
      buttons: [
        {
          text: '削除',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.delMemo(index);
          }
        }, {
          text: 'キャンセル',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    actionSheet.present();
  }
  delMemo(index: number) {
    this.lists.splice(index, 1);
    this.storage.set('lists', JSON.stringify(this.lists)).then(() => {
    });
  }
}
