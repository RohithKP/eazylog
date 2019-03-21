declare let google: any;

import { Component, OnInit } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";

import { Observable } from "rxjs";
import { AngularFirestore } from "angularfire2/firestore";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  private geocoder: any;
  public keyword: string;
  public location: string;
  public category: string;
  public items: Observable<any[]>;
  public states: string[];
  API_KEY: string = "AIzaSyDOC3MKpklqEmCUE9GUpIPaXXYnsRuTEpA";
  selectedAddress: any;
  title = "app";
  setSelectedAddress(address: any) {
    this.selectedAddress = address.description;
  }

  constructor(db: AngularFirestore) {
    this.items = db.collection("/items").valueChanges();
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
        console.log(results);
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
