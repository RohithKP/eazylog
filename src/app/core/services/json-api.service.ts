
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, catchError, tap } from 'rxjs/operators';

import { httpOptions } from "../app-config";

@Injectable()
export class JsonApiService {
    constructor(private httpClient: HttpClient) { }

    get(url): Observable<any> {
        return this.httpClient.get(this.getBaseUrl() + url, httpOptions).pipe(
            delay(100),
            catchError(this.handleError)
        );
    }

    post(data, url): Observable<any> {
        return this.httpClient
            .post<any>(this.getBaseUrl() + url, JSON.stringify(data), httpOptions)
            .pipe(
                tap(item => console.log(`added item w/ id=${item.id}`)),
                catchError(this.handleError)
            );
    }

    put(id, item, url): Observable<any> {
        return this.httpClient
            .put(this.getBaseUrl() + url + id, JSON.stringify(item), httpOptions)
            .pipe(
                tap(_ => console.log(`updated item id=${id}`)),
                catchError(this.handleError)
            );
    }

    delete(id, url): Observable<any> {
        return this.httpClient.delete<any>(`${this.getBaseUrl()}${url}/${id}`).pipe(
            tap(_ => console.log(`deleted item id=${id}`)),
            catchError(this.handleError)
        );
    }

    private getBaseUrl() {
        const port = isDevMode() ? 3000 : location.port;
        return `${location.protocol}//${location.hostname +
            (port ? ":" + port : "")}`;
    }

    private handleError(error: any) {
        let errorMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        
        return observableThrowError(errorMsg);
    }
}
