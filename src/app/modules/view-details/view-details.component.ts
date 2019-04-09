import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { Observable } from 'rxjs';
=======
>>>>>>> c007540dfb0187c586896cc280f62137e9229772
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
  public isLoading : boolean= true;
  public embedCode = '<iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>';

  constructor(
    private businessService:BusinessService,
    private route: ActivatedRoute
  ) {  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this.businessService.get(this.id).subscribe( data =>{ 
      this.item = data
      this.isLoading = false
    })
  }

}
