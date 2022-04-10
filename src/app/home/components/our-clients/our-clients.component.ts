import { Component, OnInit } from '@angular/core';
import * as constants from './our-clients.constants';

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.scss']
})
export class OurClientsComponent implements OnInit {

  public componentConstants = constants;

  constructor() { }

  ngOnInit(): void {
  }

}
