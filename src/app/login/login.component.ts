import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../loading/loading.service';
import { LoginService } from './login.service';
import { AutorizacaoUser } from './model/autorizacaoUse.model';
import { Usuario } from './model/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public user: Usuario;

  constructor(
     private service: LoginService,
     private router: Router,
     private loadingService: LoadingService,                 
    ) { 
    this.user = new Usuario();
  }

  ngOnInit(): void {
  }

  login(): void {
    this.loadingService.loading = true;
    this.service.login(this.user).subscribe(
      {
        next:(response:AutorizacaoUser)=> {
            localStorage.setItem('token', JSON.stringify(response.accessToken));
            this.router.navigate(['home']);
            this.loadingService.loading = false;
        },
        error: ()=>{
          alert("Email ou senha está incorreto");
          this.loadingService.loading = false;
        }
      }
    )
  }
}
