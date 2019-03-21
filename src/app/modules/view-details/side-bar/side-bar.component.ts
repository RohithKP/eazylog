import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BusinessService } from "./../../../core/services/business.service";

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

 public tags = [
  'lorem Ipsem',
  'lorem Ipsem',
  'lorem Ipsem',
  'lorem Ipsem',
  'lorem Ipsem',
 ]
 public locations = [
  'lorem Ipsem',
  'lorem Ipsem',
  'lorem Ipsem',
  'lorem Ipsem',
  'lorem Ipsem',
 ]

 public item : any
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
