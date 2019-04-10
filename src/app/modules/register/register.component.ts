import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public submitted = false;
  public errorMessage: string;


  constructor(private authService: AuthService,
    private router: Router, private formBuilder: FormBuilder) { }

  get f() { return this.registerForm.controls; }

  public checkPasswords(group: FormGroup) { 
    // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? { notSame: false } : { notSame: true }   
  }

  public onSubmit() {
    this.submitted = true;
    if(this.registerForm.controls.email.valid &&
       this.registerForm.controls.password.valid &&
       this.registerForm.controls.confirmPassword.valid &&
       !this.registerForm.errors.notSame
      ) {
      this.authService.doRegister({
        email: this.registerForm.controls.email.value,
        password: this.registerForm.controls.password.value
      }).then( () => {
        sessionStorage.setItem('registration', 'true');
        this.router.navigate(['/login']);
      }, err => {
        this.errorMessage = err.message;
      })
    }
  }
 
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],
      }, {validator: this.checkPasswords });
    }
}
