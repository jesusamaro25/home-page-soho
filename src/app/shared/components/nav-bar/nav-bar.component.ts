import { Component, OnInit } from '@angular/core';
import * as constants from './nav-bar.constants';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public componentConstants = constants;

  constructor() { }

  ngOnInit(): void {
  }

}
