import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Observable< boolean | UrlTree > | Promise<boolean | UrlTree>  
    | boolean | UrlTree {
      const token = localStorage.getItem('token');

      if (!token) {
        return this.router.createUrlTree(['/autenticate/login'])
      }

      return true;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
    | boolean | UrlTree {
    const token = localStorage.getItem('token');

    if(!token) {
      return this.router.createUrlTree(['/autenticate/login'])
    }

    return true;
  }
}