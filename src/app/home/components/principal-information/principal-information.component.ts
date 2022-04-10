import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-information',
  templateUrl: './principal-information.component.html',
  styleUrls: ['./principal-information.component.scss']
})
export class PrincipalInformationComponent implements OnInit {

  @Input() textButton : string = ''; 
  @Input() specialize : string = ''; 
  @Input() description : string = ''; 

  constructor() { }

  ngOnInit(): void {
  }

}
