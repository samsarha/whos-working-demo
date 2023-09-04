import { Component } from '@angular/core';
import { City } from '../City';
import { cities } from '../consts';




@Component({
  selector: 'app-cities-at-work',
  templateUrl: './cities-at-work.component.html',
  styleUrls: ['./cities-at-work.component.css']
})
export class CitiesAtWorkComponent {  
  cities: City[] = cities
}

