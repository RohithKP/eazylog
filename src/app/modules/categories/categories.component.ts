import { Component, OnInit } from "@angular/core";

@Component({
  selector: "categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  public categories: any;
  constructor() {}

  ngOnInit() {
    this.categories = [
      "Electronics",
      "Cars and Vehicles",
      "Pets",
      "Hotels",
      "Clothes",
      "Education",
      "Cinemas",
      "Sports"
    ];
  }
}
