import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-beginning',
  templateUrl: './beginning.page.html',
  styleUrls: ['./beginning.page.scss'],
})
export class BeginningPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Crearcuenta(){
    let parametros: NavigationExtras={
      replaceUrl: true
    }
    this.router.navigate(['create-user'],parametros);
  }

  login(){
    let parametros: NavigationExtras={
      replaceUrl: true
  }
  this.router.navigate(['login'],parametros);
}
}
