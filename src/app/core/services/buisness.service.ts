import { Injectable } from '@angular/core';

import { JsonApiService } from './json-api.service';
import { Observable } from 'rxjs';

@Injectable()
export class BuisnessService {

    constructor(private jsonApiService: JsonApiService) { }

    get(id): Observable<any> {
        return this.jsonApiService.get(`/business/${id}`);
    }

    getAll(): Observable<any[]> {
        return this.jsonApiService
            .get(`/business`);
    }
    
    add(category): Observable<any> {
        console.log(category);
        return this.jsonApiService.post(category, `/business/create`);
    }

    update(id, category): Observable<any> {
        return this.jsonApiService.put(id, category, '/business/update');
    }

    delete(id): Observable<any> {
        return this.jsonApiService.delete(id, `/business`);
    }
}