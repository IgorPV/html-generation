import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagens } from '../model/Postagens';

@Injectable({
  providedIn: 'root'
})
export class PostagensService {

  constructor(
    private http: HttpClient 
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagens[]>{
    
    return this.http.get<Postagens[]>('http://localhost:8080/postagens', this.token)
        
  }

  postPostagens(post: Postagens): Observable<Postagens>{

    return this.http.post<Postagens>('http://localhost:8080/postagens', post, this.token)
  
  }

  getById(id: number): Observable<Postagens>{

    return this.http.get<Postagens>(`http://localhost:8080/postagens/${id}`, this.token)

  }

  putPostagens(post: Postagens): Observable<Postagens>{

    return this.http.put<Postagens>('http://localhost:8080/postagens', post, this.token)

  }

  delete(id: number){

    return this.http.delete<Postagens>(`http://localhost:8080/postagens/${id}`, this.token)
    
  }

}
