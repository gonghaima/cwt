import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from './services/data-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  result;
  ngOnInit() {
    // this.dataServiceService.searchResult.subscribe();
    // this.dataServiceService.search().subscribe(res => this.result = res);
    //  this.dataServiceService.search().subscribe(r => this.result = r);
  }
  constructor(private dataServiceService: DataServiceService) {
  //  var data = this.dataServiceService.search();
    dataServiceService.search().subscribe(res => this.result = res);
  }
}
