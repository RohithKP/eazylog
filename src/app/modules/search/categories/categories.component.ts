import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { CategoryService } from "../../../core/services/category.service";

@Component({
  selector: "categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  public categories: Observable<any>
  public locations = []
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categories = this.categoryService.getAll();
    this.locations = ["tvm", "Delhi", "Kochi"];
  }
}
