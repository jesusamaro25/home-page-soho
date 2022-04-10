import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-clients-detail',
  templateUrl: './our-clients-detail.component.html',
  styleUrls: ['./our-clients-detail.component.scss']
})
export class OurClientsDetailComponent implements OnInit {


  @Input() information : string = ''; 
  @Input() person : string = ''; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
