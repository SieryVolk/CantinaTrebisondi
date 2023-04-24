import { getLocaleDateFormat } from '@angular/common';
import { BaseDatiService } from './../service/base-dati.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vini',
  templateUrl: './vini.component.html',
  styleUrls: ['./vini.component.css']
})

export class ViniComponent implements OnInit {

  // oggi = Date.now();

  constructor (private baseDati: BaseDatiService) {}
  
  tuttiVini: any;

  ngOnInit() : void {
      this.baseDati.getVini('https://myhealth-9920a-default-rtdb.europe-west1.firebasedatabase.app/vini.json')
      .subscribe((getVini: any) => {
        if (getVini) { hideloader() } // Quando get vini è vero richiama hideloader e nascondi lo spinner di caricamento
        console.log(getVini)
        this.tuttiVini = Object.keys(getVini).map((key)=> {
          return getVini[key]
        });
        console.log(this.tuttiVini)

        function hideloader() {
          document.getElementById('loading')!.style.display = 'none';   // Il ! da la possibilità di avere valori nulli,
                                                                        // altrimenti TypeScript non permette l'esecuzione     
        }      
      })
  }
}



  //  new Observable(observer => {
  //     let count = 0
  //     setInterval(() => {
  //       observer.next(count)
  //       count++
  //       }, 1000)
  //     }).subscribe((numero) => {
  //       console.log(numero)
  //     })
  //   }
  // }