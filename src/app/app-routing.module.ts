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
        canActivate: []
      },
      {
        path: 'register',
        loadChildren: './modules/register/register.module#RegisterModule'
      },
      {
        path: 'view/category/:name',
        loadChildren: './modules/search/search.module#SearchModule',
        canActivate: []
      }, 
      {
        path: 'view/location/:id/:name',
        loadChildren: './modules/search/search.module#SearchModule',
        canActivate: []
      },
      {
        path: 'view/tag/:id/:name',
        loadChildren: './modules/search/search.module#SearchModule',
        canActivate: []
      },
      {
        path: 'view-details/:id/:name',
        loadChildren: './modules/view-details/view-details.module#ViewDetailsModule',
        canActivate: []
      },
      {
        path: 'contact',
        loadChildren: './modules/contact/contact.module#ContactModule',
        canActivate: []
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'about',
        loadChildren: './modules/about/about.module#AboutModule'
      },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }