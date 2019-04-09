import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BusinessService } from "./../../../core/services/business.service";

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

 public locations = [
  'lorem Ipsem',
  'lorem Ipsem',
  'lorem Ipsem',
  'lorem Ipsem',
  'lorem Ipsem',
 ]

<<<<<<< HEAD
 public item : any
=======
 @Input() item: any;
 @Input() isLoading: boolean;
>>>>>>> c007540dfb0187c586896cc280f62137e9229772
 public id: string

  constructor(
    private businessService:BusinessService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this.businessService.get(this.id).subscribe( data =>{ 
      this.item = data
    })
  }

}
