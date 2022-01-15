import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private service: LoginService, private router: Router) { 
    this.user = new Usuario();
  }

  ngOnInit(): void {
  }

  login(): void {
    this.service.login(this.user).subscribe(
      (response:AutorizacaoUser)=> {
          localStorage.setItem('token', JSON.stringify(response.accessToken));
          this.router.navigate(['home']);
      },
      (error)=>{
          alert("Email ou senha está incorreto");
      }
    
  )
  }
}
