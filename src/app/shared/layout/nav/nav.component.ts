import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  private isCollapsed: boolean;
  constructor( private router : Router) { 
    console.log(router.url)
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

}
