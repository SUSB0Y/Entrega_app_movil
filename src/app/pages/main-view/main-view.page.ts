import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.page.html',
  styleUrls: ['./main-view.page.scss'],
})
export class MainViewPage implements OnInit {

  user: string = '';
  passsword: string = '';

  constructor(private router:Router) { }

  ngOnInit() {
    let parametros = this.router.getCurrentNavigation();

    if (parametros?.extras.state) {
      this.user = parametros?.extras.state['user'];
      this.passsword = parametros?.extras.state['pass'];
    }
  }
  resetpassword() {
    let extras: NavigationExtras = {
      replaceUrl: true,
      state: {
        user: this.user,
        pass: this.passsword,
      }
    };
    this.router.navigate(['reset-password'], extras);
  }


  exit(){
    let extras: NavigationExtras = {
      replaceUrl: true,
      state: {
        user: this.user,
        pass: this.passsword,
      }
    };
    this.router.navigate(['login'], extras);
  }
}
