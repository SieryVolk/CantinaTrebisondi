import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() {}

  mobile: boolean = false;
  menuViniToggle: boolean = false;

  ngOnInit() {
    this.verificaMobile()
  }

  verificaMobile() {
    if (window.innerWidth < 1000) {
      this.mobile = true
      // console.log('Dimensioni schermo =', window.innerWidth, "px")
    }
  }

  menuViniMobile() {
    if (!this.menuViniToggle) {
    document.getElementById('dropVini')!.style.display = 'block'
    } else document.getElementById('dropVini')!.style.display = 'none'
    this.menuViniToggle = !this.menuViniToggle
  }
}