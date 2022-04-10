import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { PrincipalInformationComponent } from './components/principal-information/principal-information.component';
import { RootHomeComponent } from './pages/root-home/root-home.component';
import { EventComponent } from './components/event/event.component';
import { GeneralInformationComponent } from './components/general-information/general-information.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { LetsTalkComponent } from './components/lets-talk/lets-talk.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { OurWorkDetailComponent } from './components/our-work-detail/our-work-detail.component';
import { OurClientsDetailComponent } from './components/our-clients-detail/our-clients-detail.component';


@NgModule({
  declarations: [
    PrincipalInformationComponent,
    RootHomeComponent,
    EventComponent,
    GeneralInformationComponent,
    OurWorkComponent,
    LetsTalkComponent,
    OurClientsComponent,
    FeaturedProjectsComponent,
    ProjectDetailsComponent,
    OurWorkDetailComponent,
    OurClientsDetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
