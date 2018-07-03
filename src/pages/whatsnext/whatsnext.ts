import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreatePage } from '../create/create';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-whatsnext',
  templateUrl: 'whatsnext.html',
})
export class WhatsnextPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhatsnextPage');
  }

  async nextTask(){
    this.navCtrl.setRoot(CreatePage);
  }

}
