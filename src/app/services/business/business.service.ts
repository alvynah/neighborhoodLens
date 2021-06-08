import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Business } from 'src/app/interface/business.model';

const baseUrl = 'https://neighborhoodapi.herokuapp.com/api/business';
const addurl = 'https://neighborhoodapi.herokuapp.com/api/business/post/';
const updateurl = 'https://neighborhoodapi.herokuapp.com/api/business/update/';
const geturl = 'https://neighborhoodapi.herokuapp.com/api/business/get/';
const deleteurl = 'https://neighborhoodapi.herokuapp.com/api/business/delete/';


@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Business[]> {
    return this.http.get<Business[]>(baseUrl);
  }
  get(id: any): Observable<Business> {
    return this.http.get(`${geturl}${id}/`);
  }
  create(data: { name: string; description: string; email: string; neighborhood: string; user: string; }) {
    return this.http.post(addurl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${updateurl}${id}/`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${deleteurl}${id}`);
  }

  
}
