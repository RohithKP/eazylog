var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, catchError } from 'rxjs/operators';
import { config } from '../app-config';
var JsonApiService = /** @class */ (function () {
    function JsonApiService(httpClient) {
        this.httpClient = httpClient;
    }
    JsonApiService.prototype.fetch = function (url) {
        return this.httpClient.get(this.getBaseUrl() + config.API_URL + url)
            .pipe(delay(100), catchError(this.handleError));
    };
    JsonApiService.prototype.getBaseUrl = function () {
        return location.protocol + "//" + (location.hostname + (location.port ? ':' + location.port : '')) + "/";
    };
    JsonApiService.prototype.handleError = function (error) {
        var errorMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return Observable.throw(errorMsg);
    };
    JsonApiService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], JsonApiService);
    return JsonApiService;
}());
export { JsonApiService };
//# sourceMappingURL=json-api.service.js.map