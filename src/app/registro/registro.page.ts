import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule, 
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup
  
  constructor(public fb: FormBuilder, 
              private alertButtons: AlertController,
              public navCtrl: NavController) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'Email': new FormControl('',[Validators.required, Validators.email]),
    })

  }

  ngOnInit() {
  }

 async guardar(){

    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertButtons.create({
        header: 'Alerta...!',
        subHeader: 'Eror en los datos',
        message: 'Tienes que llenar todos los campos',
        buttons: ['Aceptar'],
      });
      await alert.present();
      } else {
      var usuario = {
        nombre: f.nombre,
        password: f.password
      }
      localStorage.setItem('usuario', JSON.stringify(usuario));
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('/home');

    }
    

    

    
    
  }
}
