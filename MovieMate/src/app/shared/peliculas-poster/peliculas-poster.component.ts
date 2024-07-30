import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/peliculas.interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-peliculas-poster',
  templateUrl: './peliculas-poster.component.html',
  styleUrl: './peliculas-poster.component.css'
})
export class PeliculasPosterComponent {

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

