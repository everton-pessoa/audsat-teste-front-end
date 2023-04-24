import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Observable, map } from 'rxjs';
import { Post, Comment } from '../interfaces/post.interface';
import { Log } from '../interfaces/log.interface';

const API = "https://jsonplaceholder.typicode.com";


@Injectable({
  providedIn: 'root'
})


export class ApiService {


  constructor(private http: HttpClient) { }

  public getUsers(filter:string): Observable<User[]> {
    return this.http.get<User[]>(`${API}/users/${filter}`);
  };
  public getOneUser(id: number): Observable<User> {
    return this.http.get<User>(`${API}/users/${id}`);
  };

  public getPostsByUser(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${API}/users/${id}/posts`);
  };

  public getCommentsByPosts(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${API}/users/${id}/comments?_start=0&_limit=10`);
  };

  public delById(id: number): Observable<Post[]> {
    {
      return this.http.delete<Post[]>(`${API}/posts/${id}`);
    };
  };

  public getLogs(): Observable<any> {
    return this.http.get<Log[]>(`https://testapi.io/api/Everton/resource/testeaudsat`);
  };

  public postLog(obj:object): Observable<any> {
    return this.http.post<Log[]>(`https://testapi.io/api/Everton/resource/testeaudsat`, obj);
  };
}

