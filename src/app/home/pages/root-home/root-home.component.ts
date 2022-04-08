import { Component, OnInit } from '@angular/core';
import * as constants from './root-home.constants';

@Component({
  selector: 'app-root-home',
  templateUrl: './root-home.component.html',
  styleUrls: ['./root-home.component.scss']
})
export class RootHomeComponent implements OnInit {

  public componentConstants = constants;

  constructor() { }

  ngOnInit(): void {
  }

}