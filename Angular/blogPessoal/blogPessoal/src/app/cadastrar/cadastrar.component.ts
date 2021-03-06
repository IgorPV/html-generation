import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmSenha:string
  tipUsuario: string


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  confirmarSenha(event: any){
    this.confirmSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipUsuario = event.target.value
  }

  cadastrar(){

    this.user.tipo = this.tipUsuario

    if(this.user.senha != this.confirmSenha){
        alert('Verifique a senha')
    } else {
      this.authService.cadastrar(this.user).subscribe(
        (resp: User) => {
          this.user = resp
          this.router.navigate(['/entrar'])
          alert('Usuario cadastrado com sucesso!')
        }
      )
    }
  }

}
