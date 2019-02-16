import { Component, OnInit } from "@angular/core";

@Component({
  selector: "categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  public categories = [];
  public locations = [];

  constructor() {}

  ngOnInit() {
    this.categories = ["test", "test", "test3", "test4"];
    this.locations = ["tvm", "Delhi", "Kochi"];
  }
}
