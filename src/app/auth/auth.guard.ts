import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from "@angular/router";
import { TokenService } from "../shared/services/token/token.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _tokenService: TokenService,
    private _router: Router
    ){    
    }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (this._tokenService.isAuthenticated()) {
        return true;
    }

    this._router.navigate(['/']);
    return false;
  }
  
}
