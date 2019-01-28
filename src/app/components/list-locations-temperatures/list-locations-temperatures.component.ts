import {Component, OnInit} from '@angular/core';
import {Forecast} from "../../shared/model/forecast-temperature.model";
import {ForecastService} from "../../shared/services/forecast.service";

@Component({
  selector: 'app-list-locations-temperatures',
  templateUrl: './list-locations-temperatures.component.html',
  styleUrls: ['./list-locations-temperatures.component.css']
})
export class ListLocationsTemperaturesComponent implements OnInit {

  public temperatureList: Forecast[];
  public citySelected: string;

  constructor(private _temperatureService: ForecastService) {
  }

  ngOnInit() {
    this.citySelected;
    if(this.citySelected == undefined || this.citySelected == null ||this.citySelected =='') {
      this.citySelected = 'London';
    }
    this.getForecastByCity(this.citySelected);
  }

  receiveMessage($event) {
    this.citySelected = $event;
    this.getForecastByCity(this.citySelected);
  }

  private getForecastByCity(citySelected) {
    console.log('inside getForecastByCity');
    this._temperatureService.getForecastByCity(citySelected)

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

