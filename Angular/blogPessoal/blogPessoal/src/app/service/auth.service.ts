import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getById(id: number): Observable<User>{
    return this.http.get<User>(`http://localhost:8080/usuario/${id}`, this.token)
  }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuario/logar', userLogin)
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/usuario/cadastrar', user)
  }

  editarUser(user: User): Observable<User>{
    return this.http.put<User>('http://localhost:8080/usuario/editar', user, this.token)
  }

  logado(){
    let login: boolean = false

    if(environment.token != ''){
      login = true
    }

    return login
  }


}
