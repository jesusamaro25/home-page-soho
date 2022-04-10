import { Component, OnInit } from '@angular/core';
import * as constants from './event.constants';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  public componentConstants = constants;

  constructor() { }

  ngOnInit(): void {
  }

}
