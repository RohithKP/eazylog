import { Component, AfterViewInit } from '@angular/core';
import { 
  Router, NavigationStart, NavigationCancel, NavigationEnd 
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isLoading;
  public color = 'primary';
  public mode = 'determinate';
  public value = 50;
  public bufferValue = 75;

  constructor(private router: Router) {
    this.isLoading = true;
  }

  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if(event instanceof NavigationStart) {
          this.isLoading = true;
        }
        else if (
          event instanceof NavigationEnd || 
          event instanceof NavigationCancel
          ) {
          this.isLoading = false;
        }
      });
    }
}
