import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/peliculas.interfaces';
import { HorarioService } from '../../services/horario.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit{

  movie:Movie[] = [];
  moviesSlideShow:Movie[] = [];  

  constructor(private peliculasSvc:PeliculasService, private HorarioSvc:HorarioService){

    this.peliculasSvc.getPeliculas().subscribe(res=>{
      console.log(res);
    })

    this.HorarioSvc.getHorario().subscribe(res=>{
      console.log(res);
    })
  }

  ngOnInit(): void {

    this.peliculasSvc.getPeliculas().subscribe(movies=>{
      this.moviesSlideShow=movies;
      this.movie=movies;  
    })
    
  }

}
