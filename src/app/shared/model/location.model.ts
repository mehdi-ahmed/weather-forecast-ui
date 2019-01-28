import * as _ from 'lodash';

export class Location {
  name: string;
  country: string;
  code: number;
  limit: string;

  constructor(data?) {
    this.name = _.get(data, 'name', null);
    this.country = _.get(data, 'country', null);
    this.code = _.get(data, 'code', null);
    this.limit = _.get(data, 'limit', null);
  }
}

