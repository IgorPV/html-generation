import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagens } from '../model/Postagens';
import { Temas } from '../model/Temas';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { PostagensService } from '../service/postagens.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nome = environment.nome
  postagem: Postagens = new Postagens
  listaPost: Postagens[]

  listaTemas: Temas[]
  tema: Temas = new Temas()
  idTema:number

  user: User = new User()

  

  constructor(
    private router: Router,
    private postService: PostagensService,
    private temaService: TemaService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      //alert('Sessão expirada, faça login novamente!')
      this.router.navigate(['/entrar'])
    }

    this.getAllPostagens()
    this.getAllTemas()
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Temas[]) => {
      this.listaTemas = resp
    })

  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Temas) =>{
      this.tema = resp
    })
  }

  findByIdUser(){
    this.authService.getById(environment.id).subscribe((resp: User)=>{
      this.user = resp
    })
  }

  getAllPostagens(){
    this.postService.getAllPostagens().subscribe((resp: Postagens[])=>{
      this.listaPost = resp
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema
    

    this.user.id = environment.id
    this.postagem.criadoPor = this.user
    

    this.postService.postPostagens(this.postagem).subscribe((resp: Postagens)=>
    {
      this.postagem = resp
      alert('Postagem criada com sucesso!')
      this.postagem = new Postagens()
      this.router.navigate(['/inicio'])
    })

  }

  

}
