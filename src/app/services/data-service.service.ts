import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigServiceService } from './config-service.service';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators';
import 'rxjs/add/observable/of';

@Injectable()
export class DataServiceService {
  constructor(private http: HttpClient, private configServiceService: ConfigServiceService) { }

  search() {
    return this.configServiceService.getConfig().pipe(
      mergeMap(urlObj => this.http.get(urlObj['searchUrl'])));
  }
}
