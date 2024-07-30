import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/peliculas.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent implements OnInit {

  texto='';
  movies:Movie[]=[];
  noMovie='';


  constructor(private activatedRoute:ActivatedRoute, private peliculasSvc:PeliculasService){}



  ngOnInit(){
    this.activatedRoute.params.subscribe(params=>{

    this.texto=params['texto'];
    console.log(this.texto)

    this.peliculasSvc.buscarPeliculas(this.texto).subscribe(movies=>{
      this.movies=movies;
      if(this.movies.length == 0){

        this.noMovie= '😌 No se encontro la pelicula';

      }
    })

    })
  }

}




