import * as _ from 'lodash';

export class Temperature {
  code:Number;
  cityName:string;
  temperature:string;
  temperatureLimit:string;
  measureTime:string;
  exceeds:boolean;

  constructor(data?) {
    this.code = _.get(data, 'id', null);
    this.cityName = _.get(data, 'cityName', null);
    this.temperature = _.get(data, 'temp', null);
    this.temperatureLimit = _.get(data, 'tempLimit', null);
    this.measureTime = _.get(data, 'measureTime', null);
    this.exceeds = _.get(data, 'exceeds', null);
  }
}
