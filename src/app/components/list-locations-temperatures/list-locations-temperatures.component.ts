import {Component, OnInit} from '@angular/core';
import {Forecast} from "../../shared/model/forecast-temperature.model";
import {ForecastService} from "../../shared/services/forecast.service";
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-list-locations-temperatures',
  templateUrl: './list-locations-temperatures.component.html',
  styleUrls: ['./list-locations-temperatures.component.css']
})
export class ListLocationsTemperaturesComponent implements OnInit {

  public temperatureList: Forecast[];

  constructor(private _temperatureService: ForecastService, private _router: Router, private _routerModule: RouterModule) {
  }

  ngOnInit() {

    this._temperatureService.getForecastByCity('Paris')

      .then((data: Forecast[]) => {
        this.temperatureList = data;
      })
      .catch(() => {
      });
  }

  getColor(exceed: boolean) {
    return exceed == true ? "red" : "green";
  }
}

