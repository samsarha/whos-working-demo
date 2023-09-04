import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesAtWorkComponent } from './cities-at-work/cities-at-work.component';
import { SearchCitiesComponent } from './search-cities/search-cities.component';
import { CityWorkStatusComponent } from './city-work-status/city-work-status.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesAtWorkComponent,
    SearchCitiesComponent,
    CityWorkStatusComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
