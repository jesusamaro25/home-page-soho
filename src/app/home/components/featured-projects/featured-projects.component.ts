import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service.service';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent implements OnInit {

 public projects: Array<Project> = [];

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects(): void {
    this._apiService.getAll(`featured/projects`).subscribe((response) => {

      const { projects } = response;

      this.projects = projects;
    }, error => {
      console.error('Error', error);
    })
  }

}
