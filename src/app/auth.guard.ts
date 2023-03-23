import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './users/store/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userToken: any;
  constructor(private router: Router,private userService:UserService){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userService.userValue){
        return true;
      }else{
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
