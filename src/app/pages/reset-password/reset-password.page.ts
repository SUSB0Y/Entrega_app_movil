import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  user = '';
  password = ''; 
  new_password = '';
  
  constructor(private router: Router,) { }

  ngOnInit() {
    let parametros = this.router.getCurrentNavigation();
    
    if(parametros?.extras.state){
    this.user = parametros?.extras.state['user'];
    this.password = parametros?.extras.state['pass'];
    console.log("ingreso")
    }
  }
  change(){
    let extras: NavigationExtras={
      replaceUrl: true,
      state: {
        user: this.user,
        pass: this.new_password
      }
    }
    this.router.navigate(['login'],extras);
    
  }
}


