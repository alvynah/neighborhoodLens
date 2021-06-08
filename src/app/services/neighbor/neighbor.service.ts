import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Neighbor } from 'src/app/interface/neighbor.model';

const baseUrl = 'https://neighborhoodapi.herokuapp.com/api/neighbors';
const addurl = 'https://neighborhoodapi.herokuapp.com/api/neighbors/post/';
const updateurl = 'https://neighborhoodapi.herokuapp.com/api/neighbors/update/';
const geturl = 'https://neighborhoodapi.herokuapp.com/api/neighbors/get/';
const deleteurl = 'https://neighborhoodapi.herokuapp.com/api/neighbors/delete/';
@Injectable({
  providedIn: 'root'
})
export class NeighborService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Neighbor[]> {
    return this.http.get<Neighbor[]>(baseUrl);
  }
  get(id: any): Observable<Neighbor> {
    return this.http.get(`${geturl}${id}/`);
  }
  create(data: { name: string | undefined; location: string | undefined; description: string | undefined; police_number: number | undefined; health_tell: number | undefined; }) {
    return this.http.post(addurl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${updateurl}${id}/`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${deleteurl}${id}`);
  }

}
