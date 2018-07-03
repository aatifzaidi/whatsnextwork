import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TasksPage } from '../tasks/tasks';
import { WhatsnextPage } from '../whatsnext/whatsnext';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  tab1Root = WhatsnextPage;
  tab3Root = TasksPage;

  constructor() {

  }

}
