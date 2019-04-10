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
    if(this.registerForm.valid) {
      this.authService.doRegister({
        email: this.registerForm.controls.email.value,
        password: this.registerForm.controls.password.value
      }).then( () => {
        this.router.navigate(['/login']);
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
