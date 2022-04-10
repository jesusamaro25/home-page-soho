import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service.service';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent implements OnInit {

 // public projects: Array<Project> = [];

  constructor(private _apiService: ApiService) { }

  public projects = [
    {
        "id": 1,
        "image": "http://imgfz.com/i/yE7cwre.png",
        "logo": "http://imgfz.com/i/SJin5tc.png",
        "title": "Sitio publico y privado",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis",
        "tags": [
            "usabilidad",
            "ui",
            "ux",
            "test con usuarios"
        ]
    },
    {
        "id": 2,
        "image": "http://imgfz.com/i/iyeXRuB.png",
        "logo": "http://imgfz.com/i/BNyolfH.png",
        "title": "Sitios web 2017",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus",
        "tags": [
            "responsive",
            "ui",
            "ux"
        ]
    },
    {
        "id": 3,
        "image": "http://imgfz.com/i/Gk3oBgy.png",
        "logo": "http://imgfz.com/i/MrkLGJP.png",
        "title": "TV App",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis",
        "tags": [
            "usabilidad",
            "ui",
            "ux",
            "test con usuarios"
        ]
    }
]

  ngOnInit(): void {
 //   this.getAllProjects();
  }

  // getAllProjects(): void {
  //   this._apiService.getAll(`featured/projects`).subscribe((response) => {

  //     const { projects } = response;

  //     this.projects = projects;
  //   }, error => {
  //     console.error('Error', error);
  //   })
  // }

}
