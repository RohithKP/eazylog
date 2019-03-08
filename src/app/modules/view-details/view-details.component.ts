import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  public title = 'Lorem Ipsum'
  public details = 'Lorem Ipsum Lorem Ipsum Lorem Ipsum'
  public activeTab = 1
  public openingHours = [
    { 'day': 'Monday', 'time': '9:00AM - 6PM' },
    { 'day': 'Tuesday', 'time': '9:00AM - 6PM' },
  ]

  constructor() { }

  ngOnInit() {
    
  }

}
