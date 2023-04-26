import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseDatiService {

  constructor(private http: HttpClient) { }

  baseDati : any = null;
  tuttiVini : any = null;

  getVini(url:string) {
    return this.http.get(url)
  }

}
