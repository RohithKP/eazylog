import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
