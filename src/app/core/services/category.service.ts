import { Injectable } from '@angular/core';

import { JsonApiService } from './json-api.service';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {

    constructor(private jsonApiService: JsonApiService) { }

    get(id): Observable<any> {
        return this.jsonApiService.get(`/categories/${id}`);
    }

    getAll(): Observable<any[]> {
        return this.jsonApiService
            .get(`/categories`);
    }
    
    add(category): Observable<any> {
        return this.jsonApiService.post(category, `/categories/create`);
    }

    update(id, category): Observable<any> {
        return this.jsonApiService.put(id, category, '/categories/update');
    }

    delete(id): Observable<any> {
        return this.jsonApiService.delete(id, `/categories`);
    }
}