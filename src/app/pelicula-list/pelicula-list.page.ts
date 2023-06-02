import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module'; 
import { DbMovieService } from '../services/db-movie.service';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.page.html',
  styleUrls: ['./pelicula-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule]
})
export class PeliculaListPage implements OnInit {

   peliculas: any; 
  constructor(
    private ApiMovieService: DbMovieService
  ) { }

  ngOnInit() {
    this.ApiMovieService.ListMovie()
    .subscribe( res =>{
      //console.log(res);
      this.peliculas = res.results;
    })
  }
}
