import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/peliculas.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula-accion',
  templateUrl: './pelicula-accion.component.html',
  styleUrl: './pelicula-accion.component.css'
})
export class PeliculaAccionComponent{
  @Input() movies?:Movie[];

  constructor(private router:Router){}
  
  getStars(voteAverage:number){

    const starsCount=Math.floor(voteAverage);
    return Array(starsCount).fill(0);
  }

  onMovieClick(movie:Movie){
this.router.navigate(['/pelicula',movie.id])

  }

}
