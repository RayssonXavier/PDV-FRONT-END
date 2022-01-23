import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-area-principal',
  templateUrl: './menu-area-principal.component.html',
  styleUrls: ['./menu-area-principal.component.css']
})
export class MenuAreaPrincipalComponent {

  @Input() 
  barraNavegacao: {menu: string, rota: string, submenu: string};

  constructor(private router: Router) { 
    this.barraNavegacao = {menu: '', rota: '',submenu: ''};
  }


  public rota(url: string): void {
    void this.router.navigate([url]);
  }
}
