import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
  }

  faUserEdit = faUserEdit;
  faSignOutAlt = faSignOutAlt;

  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nome = ''
    environment.id = 0
    environment.foto = ''
  }

}
