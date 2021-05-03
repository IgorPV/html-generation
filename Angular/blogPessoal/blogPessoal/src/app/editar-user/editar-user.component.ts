import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.css']
})
export class EditarUserComponent implements OnInit {

  user: User = new User
  confirmSenha:string
  tipUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
  }

  confirmarSenha(event: any){
    this.confirmSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipUsuario = event.target.value
  }

  editarUser(){

    this.user.tipo = this.tipUsuario

    if(this.user.senha != this.confirmSenha){
        alert('Verifique a senha')
    } else {
      this.authService.editarUser(this.user).subscribe(
        (resp: User) => {
          this.user = resp
          this.router.navigate(['/entrar'])
          alert('Usuario alterado com sucesso!')
        }
      )
    }
  }
}
