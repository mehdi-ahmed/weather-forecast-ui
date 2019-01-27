import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Temperature} from '../model/locations-temperature.model';
import {environment} from "../../../environments/environment";
import {HttpType} from "./http-type.enum";
import {API_CALLS} from "./api_calls.util";

const API_URL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})

export class TemperatureService {

  constructor(private http: HttpClient) {
  }

  public getAllTemperatures(): Promise<Temperature[]> {

    return new Promise<Temperature[]>((resolve, reject) => {
      this.makeRequest(HttpType.GET, API_CALLS.GET_ALL_TEMPERATURES)
        .then((result) => {
          resolve(result.map(link => new Temperature(link)));
        })
        .catch((err) => {
          reject();
        });

    });
  }

  public makeRequest(method: HttpType, url: string, options?: any): Promise<any> {
    return this.http.request(method.toString(), environment.baseURL + url, options).toPromise();
  }
}




