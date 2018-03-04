import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './services/data-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  result;
  model = { keywords: '', urltext: '' };
  ngOnInit() { }
  constructor(private dataService: DataService) { }

  onSubmit() {
    this.dataService.search(this.model.keywords, this.model.urltext).subscribe(res => {
      this.result = res;
    });
  }
}
