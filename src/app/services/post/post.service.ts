import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interface/post.model';

const baseUrl = 'https://neighborhoodapi.herokuapp.com/api/posts/';
const addurl = 'https://neighborhoodapi.herokuapp.com/api/posts/post/';
const updateurl = 'https://neighborhoodapi.herokuapp.com/api/posts/update/';
const geturl = 'https://neighborhoodapi.herokuapp.com/api/posts/get/';
const deleteurl = 'https://neighborhoodapi.herokuapp.com/api/posts/delete/';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(baseUrl);
  }
  get(id: any): Observable<Post> {
    return this.http.get(`${geturl}${id}/`);
  }
  create(data: { title: string | undefined; post: string | undefined; user: string | undefined; hood: string | undefined; }) {
    return this.http.post(addurl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${updateurl}${id}/`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${deleteurl}${id}`);
  }

}

