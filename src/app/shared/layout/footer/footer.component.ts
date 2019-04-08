import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from "../../../core/services/category.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public categories: Observable<any>
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categories = this.categoryService.getAll();
  }

}
