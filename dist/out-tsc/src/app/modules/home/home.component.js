var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
var HomeComponent = /** @class */ (function () {
    function HomeComponent(db) {
        this.API_KEY = "AIzaSyDOC3MKpklqEmCUE9GUpIPaXXYnsRuTEpA";
        this.title = "app";
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
    HomeComponent.prototype.setSelectedAddress = function (address) {
        this.selectedAddress = address.description;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.geocoder = new google.maps.Geocoder();
    };
    HomeComponent.prototype.getGeoLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                _this.codeLatLng(lat, lng);
            }, function () {
                alert("Geocoder failed.");
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    HomeComponent.prototype.codeLatLng = function (lat, lng) {
        var _this = this;
        var latlng = new google.maps.LatLng(lat, lng);
        this.geocoder.geocode({ latLng: latlng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                console.log(results);
                if (results[1]) {
                    //formatted address
                    _this.location = results[0].formatted_address;
                }
                else {
                    alert("No results found");
                }
            }
            else {
                alert("Geocoder failed due to: " + status);
            }
        });
    };
    HomeComponent = __decorate([
        Component({
            selector: "app-home",
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.scss"],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [AngularFirestore])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map