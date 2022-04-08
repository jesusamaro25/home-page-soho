import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lets-talk',
  templateUrl: './lets-talk.component.html',
  styleUrls: ['./lets-talk.component.scss']
})
export class LetsTalkComponent implements OnInit {

  @Input() content : string = ''; 

  constructor() { }

  ngOnInit(): void {
  }

}
