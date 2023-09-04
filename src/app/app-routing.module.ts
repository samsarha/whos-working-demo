import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityWorkStatusComponent } from './city-work-status/city-work-status.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {component: HomeComponent, path: ''},
  {component: CityWorkStatusComponent, path: 'status'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
