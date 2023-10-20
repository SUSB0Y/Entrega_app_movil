import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  mdl_create_user: string= "";
  mdl_create_password: string= "";

  constructor(private router:Router) { }

  ngOnInit() {
  }


  Crearusuario(){
    let extras: NavigationExtras={
      replaceUrl:true,

      state: {
        user:this.mdl_create_user,
        pass: this.mdl_create_password
      }
    };
    this.router.navigate(['login'],extras)
  }
}
