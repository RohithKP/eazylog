import { Component, OnInit } from '@angular/core';

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

  category = 'Lorem Ipsum'
  location = 'Lorem Ipsum'
  email = 'Lorem_Ipsum@ipsum.com'
  phone = '9999839393'
  views = 9999

  constructor() { }

  ngOnInit() {
  }

}
