/* eslint-disable eqeqeq */
import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  redirect = '';
  loginPath = '/login';
  authenticated: false;
  username = '';
  user: any;
  token = '';
  logged = false;
  mode = 1;
  phone = '';
  opttime: number;
  loaded=false;
  loading=false;
  loginstart: EventEmitter<any> = new EventEmitter<any>();
  loginfailed: EventEmitter<any> = new EventEmitter<any>();
  loginsucceeded: EventEmitter<any> = new EventEmitter<any>();
  authSet: EventEmitter<any> = new EventEmitter<any>();
  constructor(private router: Router, private client: ApiService) {
   

  }

  canActivate(ext: ActivatedRouteSnapshot, ate: RouterStateSnapshot) {
    if (!this.logged) {
      this.redirect = ate.url;
      this.router.navigate([this.loginPath]);
    }
    return true;
  }

  login(data) {
    this.loading=true;
    this.client.post( 'auth/login/index', data)
      .subscribe((res: any) => {
        console.log(res);
        this.user=res.user;
        this.token=res.token;
        this.client.updateToken(this.token);
        this.loginsucceeded.emit(null);
        this.loading=false;
        this.logged=true;
      },
        (err) => {
          console.log(err);
          this.loginfailed.emit(err);
          this.loading=false;

        });

  }


  go(path: string){
    this.router.navigate([path]);
  }
  logOut() {
    localStorage.removeItem('access_token');
    this.logged = false;
    this.user = null;
    this.client.token = '';
    this.client.rebuiltHeaders();
  }


}
