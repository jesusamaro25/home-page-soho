import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootHomeComponent } from './pages/root-home/root-home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: RootHomeComponent },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
