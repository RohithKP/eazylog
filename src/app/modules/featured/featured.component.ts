import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessService } from "./../../core/services/business.service";

@Component({
  selector: 'featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  public featured: Observable<any>
  constructor(private businessService: BusinessService) {}

  ngOnInit() {
    this.featured = this.businessService.getAll();
  }


}
