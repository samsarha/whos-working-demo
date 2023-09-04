import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { ActivatedRoute, Route} from '@angular/router';
import { cities } from '../consts';

@Component({
  selector: 'app-city-work-status',
  templateUrl: './city-work-status.component.html',
  styleUrls: ['./city-work-status.component.css']
})
export class CityWorkStatusComponent implements OnInit{

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    var cityName = this.route.snapshot.params['name'];
    this.selectedCity = cities.find(c => c.name == cityName)
  }

  selectedCity = <City|undefined> {}

}
