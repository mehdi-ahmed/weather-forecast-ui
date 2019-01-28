import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Forecast} from '../model/forecast-temperature.model';
import {environment} from "../../../environments/environment";
import {ApiService} from "./api-service";
import {HttpType} from "./http-type.enum";
import {API_CALLS} from "./api_calls.util";
import {sprintf} from "sprintf-js";

const API_URL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})

export class ForecastService {

  constructor(private apiService: ApiService, private http: HttpClient) {
  }

  public getForecastByCity(cityName: string): Promise<Forecast[]> {

    return new Promise<Forecast[]>((resolve, reject) => {
      this.apiService.makeRequest(HttpType.GET, sprintf(API_CALLS.GET_FORCAST_BY_CITY, cityName))
        .then((result) => {
          resolve(result.map(data => new Forecast(data)));
        })
        .catch((err) => {
          reject();
        });

    });
  }


}




