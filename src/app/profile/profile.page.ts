import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {SharedModule} from 'src/app/shared/shared.module'
import {DbMovieService}from '../services/db-movie.service'
import { Share } from '@capacitor/share';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule , SharedModule]
})
export class ProfilePage implements OnInit {

  profileId: string | null |undefined;
  movie:any;
  constructor(
    private activate:ActivatedRoute, 
    private ApiMovieService : DbMovieService
    ) { }

  ngOnInit() {

    this.profileId = this.activate.snapshot.paramMap.get('id');
   this.ApiMovieService.ViewProfile(this.profileId)
    .subscribe(res=>{
      this.movie = res;
      console.log(res);
    })

  }

  SheredSocial(){

    Share.share({
      title: 'Recomendacion de pelicula ',
      text: 'Mira esta pelicula ',
      url: this.movie.homepage,
    });
  }

 


}
