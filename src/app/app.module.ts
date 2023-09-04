import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesAtWorkComponent } from './cities-at-work/cities-at-work.component';
import { SearchCitiesComponent } from './search-cities/search-cities.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesAtWorkComponent,
    SearchCitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
