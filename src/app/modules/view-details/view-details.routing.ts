import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDetailsComponent } from './view-details.component';

export const routes: Routes = [
    { path: '', component: ViewDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewDetailsRoutingModule { }