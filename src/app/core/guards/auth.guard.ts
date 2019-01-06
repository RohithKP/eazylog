import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from '../services/user.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        public afAuth: AngularFireAuth,
        public userService: UserService,
        private router: Router
    ) { }

    canActivate(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.userService.getCurrentUser()
                .then(user => {
                    this.router.navigate(['/home']);
                    return resolve(false);
                }, err => {
                    this.router.navigate(['/login']);
                    return resolve(true);
                })
        })
    }
}