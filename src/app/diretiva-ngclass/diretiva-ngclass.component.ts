import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  meuFavorito = false;

  meuFavorito2 = false;

  onClick() {
    this.meuFavorito = !this.meuFavorito;
  }

  onClick2() {
    this.meuFavorito2 = !this.meuFavorito2;
  }

  constructor() { }

  ngOnInit() {
  }

}
