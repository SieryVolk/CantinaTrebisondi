import { BaseDatiService } from './../../service/base-dati.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vini-bianchi',
  templateUrl: './vini-bianchi.component.html',
  styleUrls: ['../vini.component.css']
})
export class ViniBianchiComponent implements OnInit {

  constructor (private baseDati: BaseDatiService) {}

  tuttiVini:any;

  ngOnInit() {
    this.baseDati.getVini('https://myhealth-9920a-default-rtdb.europe-west1.firebasedatabase.app/vini.json')
    .subscribe((getVini: any) => {
      this.tuttiVini = Object.keys(getVini).map((key) => {
        return getVini[key]
      })
    })
  }
}
