import { Observable } from 'rxjs';
import { CategoryService } from "./../../core/services/category.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  public loading:boolean = true;
  public categories = [];
  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe( data => {
      this.categories = data
      this.loading = false;
    });

  }
}
