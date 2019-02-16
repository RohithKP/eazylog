import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/core/guards/auth.guard';

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
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'view/category/:name',
        loadChildren: './modules/search/search.module#SearchModule'
      }, 
      {
        path: 'view/location/:name',
        loadChildren: './modules/search/search.module#SearchModule'
      },
      {
        path: 'view/tag/:name',
        loadChildren: './modules/search/search.module#SearchModule'
      },
      {
        path: 'view-details/:name',
        loadChildren: './modules/view-details/view-details.module#ViewDetailsModule'
      }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }