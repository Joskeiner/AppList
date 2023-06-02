import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule,FormGroup,FormControl,Validator,FormBuilder, Validators } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  constructor(public fb: FormBuilder, 
              private alertButtons: AlertController,
              public navCtrl: NavController) { 
    this.formularioLogin = this.fb.group({
      'nombre':new FormControl("",Validators.required),
      'password':new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
    
  }
  async ingresar(){
    var f:any = this.formularioLogin.value;
    var traer = localStorage.getItem('usuario')
    var usuario = JSON.parse(traer!);
    console.log(usuario);
    console.log(f);
    if(usuario.nombre == f.nombre && usuario.password == f.password){
        console.log('ingresar');
        localStorage.setItem('ingresado','true');
        this.navCtrl.navigateRoot('/home');
    }else{
        const alert = await this.alertButtons.create({
          header: 'Alerta...!',
          subHeader: 'Error en los datos',
          message: 'Los datos que ingresaste no son correctos..!',
          buttons: ['Aceptar'],
        });
      await alert.present();
    }
  }

}
