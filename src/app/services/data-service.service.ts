import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigServiceService } from './config-service.service';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators';
import {AppConstant} from '../common/appConstant';
import 'rxjs/add/observable/of';

@Injectable()
export class DataService {
  constructor(private http: HttpClient, private configServiceService: ConfigServiceService) {}

  search(keywords) {
    return this.configServiceService.getConfig().pipe(
      mergeMap(urlObj => this.http.get(urlObj[AppConstant.SEARCH_URL]+`/?term=${keywords}`)));
  }

  anylize(term, dataResult){
    const filteredDataResult = dataResult.filter(c=>{
      return c.title.indexOf(term)!==-1;
    });
    return filteredDataResult.length;
  }
}
