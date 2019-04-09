import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private email: string;
  private password: string ;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  submit(){
    this.authService.doRegister({
      email: this.email,
      password: this.password
    }).then( () => {
      this.router.navigate(['/login']);
    })
  }
}
