import { Component } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreatePage} from '../create/create';
import { WhatsnextPage } from '../whatsnext/whatsnext';
import { DataProvider } from '../../providers/data/data';
import { ItemDetailPage } from '../item-detail/item-detail';


@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {
  public items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public dataService: DataProvider) {
    this.dataService.getData().then((todos) => {
 
      if(todos){
        this.items = todos;
      }
 
    });
  
  }

  ionViewDidLoad() {
    
  }

  addItem(){
    let addModal = this.modalCtrl.create(CreatePage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
  }
 
  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }

  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

}
