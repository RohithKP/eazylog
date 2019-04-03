import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
      {
        path: 'login',
        loadChildren: './modules/login/login.module#LoginModule'
      },
      {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'register',
        loadChildren: './modules/register/register.module#RegisterModule'
      },
      {
        path: 'view/category/:name',
        loadChildren: './modules/search/search.module#SearchModule',
        canActivate: [AuthGuard]
      }, 
      {
        path: 'view/location/:id/:name',
        loadChildren: './modules/search/search.module#SearchModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'view/tag/:id/:name',
        loadChildren: './modules/search/search.module#SearchModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'view-details/:id/:name',
        loadChildren: './modules/view-details/view-details.module#ViewDetailsModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'contact',
        loadChildren: './modules/contact/contact.module#ContactModule',
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }