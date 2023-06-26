import { BaseDatiService } from './../../service/base-dati.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vini-rossi',
  templateUrl: './vini-rossi.component.html',
  styleUrls: ['../vini.component.css']
})
export class ViniRossiComponent implements OnInit {

  constructor (private baseDati: BaseDatiService) {}

  tuttiVini: any
  coloreVino: string = "rosso"
  @Input('Buonrosso')buonrosso: string = "io sono un dato del component vini-rossi"

  ngOnInit() {
    this.baseDati.getVini(`https://myhealth-9920a-default-rtdb.europe-west1.firebasedatabase.app/vini.json?orderBy="colore"&equalTo="${this.coloreVino}"`)
    .subscribe((getVini: any) => {
      this.tuttiVini = Object.keys(getVini).map((key) => {
        return getVini[key]
      })
    })
  }

  daPrezzoBasso () {
    this.baseDati.getVini('https://myhealth-9920a-default-rtdb.europe-west1.firebasedatabase.app/vini.json?orderBy="prezzo"&endAt=9999')
    .subscribe((getVini: any) => {
      this.tuttiVini = Object.keys(getVini).map((key) => {
        return getVini[key]
      })
    })
  }

  daPrezzoAlto () {
    this.baseDati.getVini('https://myhealth-9920a-default-rtdb.europe-west1.firebasedatabase.app/vini.json?orderBy="prezzo"&endAt=9999')
    .subscribe((getVini: any) => {
      this.tuttiVini = Object.keys(getVini).map((key) => {
        return getVini[key]
      })
      // Il Realtime DB di Firebase non permette di ordinare gli elementi risultanti da una query in ordine DESC,
      // quindi dobbiamo usare il seguente escamotage: ordinare in ASC, prendere l'array ed invertirlo. In questo modo lo avremo in DESC
      this.tuttiVini.reverse();
    })
  }

  daPiuGiovane () {
    this.baseDati.getVini('https://myhealth-9920a-default-rtdb.europe-west1.firebasedatabase.app/vini.json?orderBy="annata"&endAt=9999')
    .subscribe((getVini: any) => {
      this.tuttiVini = Object.keys(getVini).map((key) => {
        return getVini[key]
      })
    })
  }

  daPiuMaturo() {
    this.baseDati.getVini('https://myhealth-9920a-default-rtdb.europe-west1.firebasedatabase.app/vini.json?orderBy="annata"&endAt=9999')
    .subscribe((getVini: any) => {
      this.tuttiVini = Object.keys(getVini).map((key) => {
        return getVini[key]
      })
      this.tuttiVini.reverse()
    })
  }

}


// NB Il Realtime DB di Firebase non supporta query multiple, quindi non è possibile affinare ulteriormente la ricerca con più criteri come
// potremmo fare in MySql. Per farlo è necessario utilizzare il Firestore DB
