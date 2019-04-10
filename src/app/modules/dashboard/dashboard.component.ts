import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public activeTab = 1;
  public bussinessForm: FormGroup;
  public profileForm: FormGroup;
  public tags = [];
  public galleryImages = [];

  constructor(private formBuilder: FormBuilder) { }

  get b() { return this.bussinessForm.controls; }

  ngOnInit() { 
    this.bussinessForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      location: ['', [Validators.required]],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
    });
    this.profileForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
    });
  }

}
