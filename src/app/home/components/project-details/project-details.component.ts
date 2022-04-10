import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Project } from '../../../models/project.model';
import * as constants from './project-details..constants';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit, OnChanges {

  @Input() project: Project = {
    id: 0,
    image: '',
    logo: '',
    title: '',
    description: '',
    tags: []
  }

  public componentConstants = constants;



  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges) {
   this.project = changes.project.currentValue;
   console.log(this.project)
  }

}
