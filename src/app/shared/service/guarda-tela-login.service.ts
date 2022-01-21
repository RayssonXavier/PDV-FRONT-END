import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardaTelaLoginService implements CanActivate{

  constructor(public auth: AuthService, public router: Router) { }
  canActivate(): boolean {
    if (this.auth.isAuthenticated()) { // se o token estiver expirado retorna para a página de login
      void this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
