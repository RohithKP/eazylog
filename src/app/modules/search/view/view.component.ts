import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessService } from "./../../../core/services/business.service";

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public items = []
  public tempItems = []
  public count = 0
  public displayMode = 1
  public isLoading = true

  constructor( private businessService:BusinessService ) { }

  setDisplayMode(mode: number) {
    this.displayMode = mode
  }

  onScrollDown() {
    if(this.count<this.items.length) {
      for(let i=0; i<6; i++) {
        this.tempItems[i] = this.items[this.count]
        this.count++;
      }
    }
  }

  ngOnInit() {
    this.businessService.getAll().subscribe( item => {
      this.items = item;
    })  
    if(this.items.length > 0) {
      this.isLoading = true;
    }
    for(let i=0; i<6; i++) {
      this.tempItems[i] = this.items[this.count]
      this.count++;
    }  
  }

}
