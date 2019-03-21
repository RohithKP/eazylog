import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessService } from "./../../core/services/business.service";

@Component({
  selector: 'recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

  public recent: Observable <any>

  constructor( private businessService:BusinessService) { }

  ngOnInit() {
    this.recent = this.businessService.getAll()
  }

}
