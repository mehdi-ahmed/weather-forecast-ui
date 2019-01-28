import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LocationService} from "../../shared/services/location-service";
import {Location} from "../../shared/model/location.model";
import {ForecastService} from "../../shared/services/forecast.service";
import {Forecast} from "../../shared/model/forecast-temperature.model";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  public locationsList: Location[];
  @Output() messageEvent =  new EventEmitter<string>();

  public selectedLocation: string;

  constructor(private _locationService: LocationService, private _temperatureService: ForecastService){
  }

  sendMessage(){
    this.messageEvent.emit(this.selectedLocation);
  }

  ngOnInit() {
    this._locationService.getLocations()

      .then((data: Location[]) => {
        this.locationsList = data;
      })
      .catch(() => {
      });
  }

  onLocationSelect(val: any) {
    this.selectedLocation = val.target.value;
    this.sendMessage();

    this._temperatureService.getForecastByCity(this.selectedLocation)

      .then((data: Forecast[]) => {
        // this.temperatureList = data;
      })
      .catch(() => {
      });
  }

}
