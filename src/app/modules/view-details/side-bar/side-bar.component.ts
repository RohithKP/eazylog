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

 @Input() item: any;
 @Input() isLoading: boolean;
 public id: string

  constructor(
    private businessService:BusinessService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
