import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public name;
  public email;
  public message;
  public showModal = false;

  constructor() { }

  public processForm() {
    this.showModal = true;
  }

  public closeModal() {
    this.showModal = false;
  }

  ngOnInit() {
  }

}
