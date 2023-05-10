import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseDatiService {

  constructor(private http: HttpClient) { }

  baseDati : any = null;
  tuttiVini : any = null;
  coloreVino : string = "";
  log : string = "provaprova";

  getVini(url:string) {
    return this.http.get(url)
  }

  // TENTATIVO DI PARAMETRIZZAZIONE DELLA FUNZIONE DI LETTURA VINI PER TUTTI I COMPONENT
  //
  // getViniBase() {
  //   this.baseDati.getVini(`https://myhealth-9920a-default-rtdb.europe-west1.firebasedatabase.app/vini.json?orderBy="colore"&equalTo="${this.coloreVino}"`)
  //   .subscribe((getVini: any) => {
  //     this.tuttiVini = Object.keys(getVini).map((key) => {
  //       return getVini[key]
  //     })
  //   })
  // }


}
