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
        path: 'view',
        loadChildren: './modules/search/search.module#SearchModule'
      }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }