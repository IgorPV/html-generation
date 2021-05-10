import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagens } from '../model/Postagens';
import { Temas } from '../model/Temas';
import { PostagensService } from '../service/postagens.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-editar-post',
  templateUrl: './editar-post.component.html',
  styleUrls: ['./editar-post.component.css']
})
export class EditarPostComponent implements OnInit {

  postagem: Postagens = new Postagens()

  tema: Temas = new Temas()
  listaTemas: Temas[]
  idTema: number


  constructor( 
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostagensService,
    private temaService: TemaService
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      //alert('Sessão expirada, faça login novamente!')
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdPost(id)
    this.findAllTema
  }

  findByIdPost(id: number){
    this.postService.getById(id).subscribe((resp: Postagens) =>{
      this.postagem = resp
    })
  }
  
  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Temas)=>{
      this.tema = resp
    })
  }

  findAllTema(){
    this.temaService.getAllTema().subscribe((resp:Temas[])=>{
      this.listaTemas = resp
    })
  }


  atualizar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.postService.putPostagens(this.postagem).subscribe((resp:Postagens)=>{
      this.postagem = resp
      alert('Post alterado com sucesso')
      this.router.navigate(['/inicio'])
    })
  }

}
