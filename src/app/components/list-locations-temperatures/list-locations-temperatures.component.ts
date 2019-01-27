import {Component, OnInit} from '@angular/core';
import {Temperature} from "../../shared/model/locations-temperature.model";
import {TemperatureService} from "../../shared/services/temperature.service";
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-list-locations-temperatures',
  templateUrl: './list-locations-temperatures.component.html',
  styleUrls: ['./list-locations-temperatures.component.css']
})
export class ListLocationsTemperaturesComponent implements OnInit {

  public temperatureList: Temperature[];

  constructor(private _temperatureService: TemperatureService, private _router: Router, private _routerModule: RouterModule) {
  }

  ngOnInit() {

    this._temperatureService.getAllTemperatures()

      .then((data: Temperature[]) => {
        this.temperatureList = data;
      })
      .catch(() => {
      });

    /*ngOnInit() {
      this._temperatureService.getAllTemperatures().

      subscribe(data => {
        this.temperatureList = data;
      });
    }*/


  }
}

