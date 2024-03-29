import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss'],
})
export class GeneralInformationComponent implements OnInit {

  @Input() title : string = ''; 
  @Input() description : string = ''; 
  
  constructor() { }

  ngOnInit(): void {
  }

}