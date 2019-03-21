import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

import { TokenInterceptor } from './interceptors/token.interceptor';

import { throwIfAlreadyLoaded } from './guards/module-import.guard';

import { JsonApiService, CategoryService, UserService, AuthService, BusinessService } from './services';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        AuthGuard,
        NoAuthGuard,

        JsonApiService,
        CategoryService,
        BusinessService,
        UserService,
        AuthService,

        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }

    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: [JsonApiService,
                CategoryService,
                BusinessService,
                UserService,
                AuthService,]
        }
    }
}