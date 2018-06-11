import {Injectable} from '@angular/core';

@Injectable()
export class ApiConfigService {

  config: any = {
    baseUrl: 'http://www.remeliai.lt/',
    apiSegment: 'wp-json/wc/v2/',
    accessToken: 'agxbzhetu9bpqrzpmyqjzg02hwxkejdfd47dx2v6'
  };

  constructor() {
  }


}
