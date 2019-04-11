import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessService } from "./../../core/services/business.service";

@Component({
  selector: 'recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

  public recent = [];
  public loading: boolean = true;

  constructor( private businessService:BusinessService) { 
    this.loading = true;
  }

  ngOnInit() {
    this.businessService.getAll().subscribe( data => {
      this.recent = data;
    })
    if(this.recent.length > 0) {
      this.loading = false;
    }
  }

}
