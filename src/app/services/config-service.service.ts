import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppConstant} from '../common/appConstant';

@Injectable()
export class ConfigServiceService {
  constructor(private http: HttpClient) {}
  private configUrl = AppConstant.CONFIG_URL;

  getConfig() {
    return this.http.get(this.configUrl);
  }
}
