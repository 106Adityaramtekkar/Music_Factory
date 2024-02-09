import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  constructor(private http :HttpClient) { }


getsong(){
  const headers = new HttpHeaders()
  return this.http.get('http://localhost:8080/insert/get',{
    headers:headers
  });
}
}