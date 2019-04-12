import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.scss']
})
export class LoginComponent {

  public loginForm: FormGroup;
  public errorMessage: string;
  public successMessage: string;


  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  tryFacebookLogin(){
    this.authService.doFacebookLogin()
    .then(res => {
      this.router.navigate(['/home']);
    })
  }

  tryTwitterLogin(){
    this.authService.doTwitterLogin()
    .then(res => {
      this.router.navigate(['/home']);
    })
  }

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/home']);
    })
  }

  tryLogin(value){
    this.authService.doLogin(value)
    .then(res => {
      this.router.navigate(['/home']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }

  ngOnInit() {
    let showToaster = JSON.parse(sessionStorage.getItem('registration'));
    if(showToaster) {
      sessionStorage.removeItem('registration');
      this.successMessage = 'Registration success. Please Login';
    }
  }
}