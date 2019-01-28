import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiService} from "./api-service";
import {HttpType} from "./http-type.enum";
import {API_CALLS} from "./api_calls.util";
import {sprintf} from "sprintf-js";
import {Location} from '../model/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private apiService: ApiService, private http: HttpClient) {
  }

  public getLocations(): Promise<Location[]> {

    return new Promise<Location[]>((resolve, reject) => {
      this.apiService.makeRequest(HttpType.GET, sprintf(API_CALLS.GET_ALL_LOCATIONS, null))
        .then((result) => {
          resolve(result.map(data => new Location(data)));
        })
        .catch((err) => {
          reject();
        });
    });
  }
}
