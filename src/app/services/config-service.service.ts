import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigServiceService {
  constructor(private http: HttpClient) {}
  private configUrl = 'assets/config.json';

  getConfig() {
    return this.http.get(this.configUrl);
  }
}
