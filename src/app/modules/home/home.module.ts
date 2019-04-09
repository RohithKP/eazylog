import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CategoriesModule } from "../categories/categories.module";
import { FeaturedModule } from "../featured/featured.module";
import { RecentModule } from "../recent/recent.module";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { SharedModule } from "../../shared";
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CategoriesModule,
    FeaturedModule,
    CarouselModule,
    TypeaheadModule,
    FormsModule,
    RecentModule,
    SharedModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}
