import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_user: string = "";
  mdl_password: string = "";
  new_user= "si";
  new_password= "no";

  isAlertOpen = false;
  public alertButtons = ['Ok'];

  constructor(private router: Router,
    private alertController: AlertController
    ){}

  ngOnInit() {
    let parametros = this.router.getCurrentNavigation();

    if (parametros?.extras.state) {
      this.new_user = parametros?.extras.state['user'];
      this.new_password= parametros?.extras.state['pass'];
    }
  }

  async login(){
    if (this.mdl_user == this.new_user && this.mdl_password == this.new_password  ) {
      let extras: NavigationExtras = {
        replaceUrl: true,

        state: {
          user: this.mdl_user,
          pass: this.mdl_password,
        },
      };
      if (this.mdl_user.trim() === '' || this.mdl_password.trim() === '') {
        const alert = await this.alertController.create({
          header: 'Alerta',
          message: 'Por favor, ingrese tanto el usuario como la contraseña validos',
          buttons: ['OK'],
        });
        await alert.present();
        return; // Detiene el flujo de la función si no se ingresaron credenciales que sean validas
}
      this.router.navigate(['main-view'], extras);
    } else {
      const alert = await this.alertController.create({
        header: 'alerta',
        message: 'Las credenciales son invalidas',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

}


