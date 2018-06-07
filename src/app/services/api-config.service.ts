import {Injectable} from '@angular/core';

@Injectable()
export class ApiConfigService {

  config: any = {
    baseUrl: 'http://www.remeliai.lt/',
    apiSegment: 'wp-json/wc/v2/',
    accessToken: 'vgmmwz5ilkzrwhclruqrhj698av7ydrmvfsjifvb'
  };

  constructor() {
  }


}
