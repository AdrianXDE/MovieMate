import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/peliculas.interfaces';

import Swiper from 'swiper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrl: './slide-show.component.css'
})
export class SlideShowComponent implements OnInit, AfterViewInit {

  @Input() movies? : Movie[];
  mySwiper?: Swiper;
  

  constructor(private  router:Router){ }

  ngAfterViewInit(): void {

    this.mySwiper=new Swiper('.swiper',{
      loop:true
    });

  }
  
  ngOnInit(): void {
  }

  onSliderPrev(){
    this.mySwiper?.slidePrev();
  }

  onSliderNext(){
    this.mySwiper?.slideNext();
  }

  onMovieClick(movie:Movie){
    this.router.navigate(['/pelicula', movie.id])

  }

}
