import { Observable } from 'rxjs';
import { CategoryService } from "./../../core/services/category.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  public categories: Observable<any>
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categories = this.categoryService.getAll();
  }
}
