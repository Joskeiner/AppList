import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { DbMovieService } from '../services/db-movie.service'; 

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule]
})
export class BuscarPage implements OnInit {
 
  peliculas: any;
  constructor(
    private ApiMovieService:DbMovieService
  ) { }

  ngOnInit() {
  }

  buscarPelicula(texto: String){
    texto = texto.trim();
    if(texto.length === 0){
      return;
    }

    this.ApiMovieService.SearchForId(texto)
    .subscribe((data: any)=>{
      //console.log(data);
      this.peliculas=data.results;
      const miCampo = document.getElementById("miCampo") as HTMLInputElement;
    miCampo.value = "";
    })
    //console.log(texto);
  }

}




//this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/search/movie?api_key=f94aa13f0bf3664d4f542fa08948a210&language=en-US&query='+texto+'&page=1&include_adult=false')
    // .subscribe((data: any)=>{
    //   console.log(data);
    //   this.peliculas=data.results;
    //   const miCampo = document.getElementById("miCampo") as HTMLInputElement;
    // miCampo.value = "";
    // })
    // console.log(texto);