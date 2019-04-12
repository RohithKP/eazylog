declare let google: any;

import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";

import { Observable } from "rxjs";

import { CategoryService } from "./../../core/services/category.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, AfterViewInit {
  private geocoder: any;
  public keyword: string = 'keyword';
  public location: string = 'location';
  public category: string = 'category';
  public items: Observable<any[]>;
  public categories: any;
  public cat = [];
  public states: string[];
  API_KEY: string = "AIzaSyDOC3MKpklqEmCUE9GUpIPaXXYnsRuTEpA";
  selectedAddress: any;
  title = "app";
  setSelectedAddress(address: any) {
    this.selectedAddress = address.description;
  }

  constructor(private categoryService: CategoryService) {
    this.category = "";
    this.states = [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware"
    ];
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe( item => {
      this.categories = item;
    });
    this.categories.forEach( item => {
      this.cat.push(item.name)
    })
  }
  ngAfterViewInit(): void {
    this.geocoder = new google.maps.Geocoder();
  }
  public getGeoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;
          this.codeLatLng(lat, lng);
        },
        () => {
          alert("Geocoder failed.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  private codeLatLng(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    this.geocoder.geocode({ latLng: latlng }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          //formatted address
          this.location = results[0].formatted_address;
        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
  }
}
