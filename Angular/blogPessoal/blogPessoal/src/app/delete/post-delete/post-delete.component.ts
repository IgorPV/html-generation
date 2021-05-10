import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagens } from 'src/app/model/Postagens';
import { Temas } from 'src/app/model/Temas';
import { PostagensService } from 'src/app/service/postagens.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})
export class PostDeleteComponent implements OnInit {
  postagem: Postagens = new Postagens()
  idPost: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostagensService,
    private temaService: TemaService
    ) { }

  ngOnInit() {
    if(environment.token == ''){
      //alert('Sessão expirada, faça login novamente!')
      this.router.navigate(['/entrar'])
    }

    this.idPost = this.route.snapshot.params['id']
    this.findByIdPost(this.idPost)
  }

  findByIdPost(id: number){
    this.postService.getById(id).subscribe((resp: Postagens) =>{
      this.postagem = resp
    })
  }
  
  deletar(){
    this.postService.delete(this.idPost).subscribe(()=>{
      alert('post deletado com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }
}
