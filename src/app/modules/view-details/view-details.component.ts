import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BusinessService } from "./../../core/services/business.service";

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  public item 
  public id: string
  public activeTab = 1

  constructor(
    private businessService:BusinessService,
    private route: ActivatedRoute
  ) {  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this.businessService.get(this.id).subscribe( data =>{ 
      this.item = data
    })
  }

}
