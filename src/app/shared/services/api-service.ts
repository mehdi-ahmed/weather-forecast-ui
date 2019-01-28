import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {HttpType} from "./http-type.enum";


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public makeRequest(method: HttpType, url: string, options?: any): Promise<any> {
    return this.http.request(method.toString(), environment.baseURL + url, options).toPromise();
  }
}
