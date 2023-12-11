import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private url="https://localhost:7172/api/Books"

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get(this.url)
  }

  addBook(body:any){
    return this.http.post(this.url,body)
  }

  updateBook(body:any){
    return this.http.put(this.url+body.id,body)
  }

  deleteBook(body:any){
    return this.http.delete(this.url+body.id)
  }
}
