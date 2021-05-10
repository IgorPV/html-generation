import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
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
  idUser: number 

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      //alert('Sessão expirada, faça login novamente!')
      this.router.navigate(['/entrar'])
    }


    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  confirmarSenha(event: any){
    this.confirmSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipUsuario = event.target.value
  }

  findByIdUser(id: number){
    this.authService.getById(id).subscribe((resp: User)=>{
      this.user = resp
    })
  }

  editarUser(){

    this.user.tipo = this.tipUsuario

    if(this.user.senha != this.confirmSenha){
        alert('Verifique a senha')
    } else {
      this.authService.editarUser(this.user).subscribe(
        (resp: User) => {
          this.user = resp
          alert('Usuario alterado com sucesso!')
          this.router.navigate(['/inicio'])
          environment.id=0
          environment.token=''
          environment.nome=''
          environment.foto=''
        }
      )
    }
  }
}
