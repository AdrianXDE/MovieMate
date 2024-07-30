import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { MovieDetails } from '../../interfaces/details.interfaces';
import { Cast } from '../../interfaces/credits.interfaces';
import { combineLatest } from 'rxjs';
import { Video } from '../../interfaces/video.interfaces.';



@Component({
  selector: 'app-pelicula',
  templateUrl:'./pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent implements OnInit{
  [x: string]: any;

  pelicula?:MovieDetails;
  cast: Cast[]=[];
  trailer?:Video;
  
  constructor(private activatedRoute:ActivatedRoute, private peliculasSvc:PeliculasService, private router:Router){}

  ngOnInit() {
    const {id} = this.activatedRoute.snapshot.params;

    combineLatest([
      this.peliculasSvc.peliculaDetalle(id),
      this.peliculasSvc.peliculaCreditos(id),
      


    ]).subscribe(([movie,cast])=>{

      if (movie === null || cast === null) {
        console.error('Error:La pelicula o el reparto no se encontraron');
        return; 
      }
      this.pelicula=movie;
      this.cast=cast;


    })
  }

  getStars(voteAverage:number){
    const starsCount = Math.floor(voteAverage);
    return Array(starsCount).fill(0);

  }



  regresar(){
    window.history.back();
  }

  comprar(){
    this.router.navigate(['/Card'])
  }

}
