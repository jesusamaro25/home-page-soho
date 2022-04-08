import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-work-detail',
  templateUrl: './our-work-detail.component.html',
  styleUrls: ['./our-work-detail.component.scss']
})
export class OurWorkDetailComponent implements OnInit {

  @Input() title : string = ''; 
  @Input() description : string = ''; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
