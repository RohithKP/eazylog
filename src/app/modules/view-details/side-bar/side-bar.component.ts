import { Component, OnInit, Input } from '@angular/core';

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

  constructor( ) { }

  ngOnInit() {
  }

}
