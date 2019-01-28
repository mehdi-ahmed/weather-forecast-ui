import * as _ from 'lodash';

export class Forecast {
  code: Number;
  city: string;
  temperature: string;
  limit: string;
  date: string;
  exceed: boolean;

  constructor(data?) {
    this.code = _.get(data, 'code', null);
    this.city = _.get(data, 'city', null);
    this.temperature = _.get(data, 'temperature', null);
    this.limit = _.get(data, 'limit', null);
    this.date = _.get(data, 'date', null);
    this.exceed = _.get(data, 'exceed', null);
  }
}
