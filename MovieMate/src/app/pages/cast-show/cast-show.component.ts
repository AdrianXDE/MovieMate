import { Component, Input } from '@angular/core';
import { Cast } from '../../interfaces/credits.interfaces';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-show',
  templateUrl: './cast-show.component.html',
  styleUrl: './cast-show.component.css'
})
export class CastShowComponent {
   @Input() cast?:Cast[]
  
  ngAfterViewInit() {
    
    const swiper = new Swiper('.swiper',{
      slidesPerView:5.3,
      freeMode:true,
      spaceBetween:15
    })

  }

}
