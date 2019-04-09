import { Injectable } from "@angular/core";

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { httpOptions } from "../app-config";
@Injectable()
export class UserService {

    constructor(
        public db: AngularFirestore,
        public afAuth: AngularFireAuth
    ) { }


    getCurrentUser() {
        return new Promise<any>((resolve, reject) => {
            var user = firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    user.getIdToken().then(function (idToken) {
                        httpOptions.headers = httpOptions.headers.set('id_token', idToken);
                    });
                    resolve(user);
                } else {
                    httpOptions.headers = httpOptions.headers.delete('id_token');
                    reject('No user logged in');
                }
            })
        })
    }

    updateCurrentUser(value) {
        return new Promise((resolve, reject) => {
            var user = firebase.auth().currentUser;
            user.updateProfile({
                displayName: value.name,
                photoURL: user.photoURL
            }).then((res: any) => {
                resolve(res)
            }, err => reject(err))
        })
    }
}