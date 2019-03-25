var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
var PlaceAutocompleteComponent = /** @class */ (function () {
    function PlaceAutocompleteComponent(httpClient) {
        this.httpClient = httpClient;
        this.giveBack = new EventEmitter();
        this.loading = false;
        this.addressInput = '';
    }
    PlaceAutocompleteComponent.prototype.ngOnInit = function () {
    };
    PlaceAutocompleteComponent.prototype.submitForm = function () {
        if (this.predictions && this.predictions.length > 0) {
            this.setSelectedAddress(this.predictions[0]);
        }
        else {
            this.setMessage(true);
        }
    };
    PlaceAutocompleteComponent.prototype.suggestionSelected = function (suggestion) {
        this.setSelectedAddress(suggestion);
    };
    PlaceAutocompleteComponent.prototype.setSelectedAddress = function (selectedAddress) {
        this.selectedAddress = selectedAddress;
        this.addressInput = '';
        this.predictions = null;
        this.giveBack.emit(this.selectedAddress);
    };
    PlaceAutocompleteComponent.prototype.keyUpHandler = function () {
        var _this = this;
        this.predictions = null;
        if (this.addressInput.length >= 5) {
            var address_1 = this.addressInput;
            setTimeout(function () {
                if (address_1 === _this.addressInput) {
                    _this.makeApiCall(address_1, _this.handleResponse);
                }
            }, 100);
        }
    };
    PlaceAutocompleteComponent.prototype.makeApiCall = function (address, responseHandler) {
        var _this = this;
        this.loading = true;
        var options = {
            withCredentials: false,
        };
        var queryOptions = {
            input: address,
            key: this.API_KEY,
            types: 'address'
        };
        this.addGranularOptions(queryOptions);
        var corsProxyUrl = 'https://cors-anywhere.herokuapp.com';
        var API_URL = 'https://maps.googleapis.com/maps/api/place/autocomplete';
        var BASE_URL = corsProxyUrl + API_URL;
        var queryString = this.encodeQuery(queryOptions);
        var callUrl = BASE_URL + '/json?' + queryString;
        this.httpClient.get(callUrl, options)
            .toPromise()
            .then(function (response) {
            console.log('api call response: ', response);
            _this.handleResponse(response);
            _this.loading = false;
        })
            .catch(function (err) {
            console.log(err);
            _this.loading = false;
        });
    };
    PlaceAutocompleteComponent.prototype.encodeQuery = function (data) {
        var ret = [];
        for (var d in data)
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        return ret.join('&');
    };
    PlaceAutocompleteComponent.prototype.addGranularOptions = function (queryOptions) {
        if (this.location) {
            queryOptions.location = this.location;
        }
        if (this.radius) {
            queryOptions.radius = this.radius;
        }
        if (this.strictbounds) {
            queryOptions.strictbounds = this.strictbounds;
        }
        if (this.language) {
            queryOptions.language = this.language;
        }
    };
    PlaceAutocompleteComponent.prototype.handleResponse = function (response) {
        if (response && response.predictions.length > 0) {
            this.predictions = response.predictions;
            this.setMessage(false);
        }
        else {
            this.setMessage(true);
        }
    };
    PlaceAutocompleteComponent.prototype.setMessage = function (boo) {
        if (boo) {
            this.errorMessage = 'Please insert a valid address';
        }
        else {
            this.errorMessage = null;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PlaceAutocompleteComponent.prototype, "API_KEY", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PlaceAutocompleteComponent.prototype, "language", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], PlaceAutocompleteComponent.prototype, "location", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], PlaceAutocompleteComponent.prototype, "radius", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PlaceAutocompleteComponent.prototype, "strictbounds", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlaceAutocompleteComponent.prototype, "giveBack", void 0);
    PlaceAutocompleteComponent = __decorate([
        Component({
            selector: 'place-autocomplete',
            templateUrl: './place-autocomplete.component.html',
            styleUrls: ['./place-autocomplete.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], PlaceAutocompleteComponent);
    return PlaceAutocompleteComponent;
}());
export { PlaceAutocompleteComponent };
//# sourceMappingURL=place-autocomplete.component.js.map