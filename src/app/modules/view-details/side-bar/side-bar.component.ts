import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

 private tags = [
  'lorem Ipsem',
  'lorem Ipsem',
  'lorem Ipsem',
  'lorem Ipsem',
  'lorem Ipsem',
 ]
 private locations = [
  'lorem Ipsem',
  'lorem Ipsem',
  'lorem Ipsem',
  'lorem Ipsem',
  'lorem Ipsem',
 ]

  constructor() { }

  ngOnInit() {
  }

}
