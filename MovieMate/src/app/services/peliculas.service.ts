import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Movie, PeliculasResponse } from '../interfaces/peliculas.interfaces';
import { MovieDetails } from '../interfaces/details.interfaces';
import { Cast, Credits } from '../interfaces/credits.interfaces';
import { Video } from '../interfaces/video.interfaces.';



@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  [x: string]: any;
 

  private serverURL:string = 'https://api.themoviedb.org/3'
  private peliculaPage = 1;

  constructor(private http:HttpClient) { }

  get params(){
    return{
      api_key : '0b6fb2e15f4237819e8922733393debd',
      language : 'es-ES',
      page:this.peliculaPage.toString() 
    }

  }

  getPeliculas():Observable<Movie[]>{

    return this.http.get<PeliculasResponse>(`${this.serverURL}/movie/now_playing`,{params:this.params}).pipe(

      map((res)=>res.results)
    )
}

buscarPeliculas(texto:string):Observable<Movie[]>{


  return this.http.get<PeliculasResponse>(`${this.serverURL}/search/movie?query=${texto}&language=es-MX&page=1`,{params:this.params}).pipe(

    map(res=>res.results)

  )

}

peliculaDetalle(id:string){

  return this.http.get<MovieDetails>(`${this.serverURL}/movie/${id}?&language=es-MX`,{params:this.params}).pipe(

    catchError(err=> of(null))

  )

}


peliculaCreditos(id:string):Observable<Cast[]>{
  
  return this.http.get<Credits>(`${this.serverURL}/movie/${id}/credits?&language=es-MX`,{params:this.params}).pipe(
    
    map(res=>res.cast),
    catchError(err=> of([]))

  )
}

peliculasvideo(id:String){

  return this.http.get<Video>(`${this.serverURL}/movie/${id}/videos?&language=es-MX`,{params:this.params}).pipe(
    
    catchError(err=> of(null)))
}

} 



