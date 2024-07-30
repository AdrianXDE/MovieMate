import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BuscarComponent } from './buscar/buscar.component';
import { SharedModule } from '../shared/shared.module';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { CastShowComponent } from './cast-show/cast-show.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    HomeComponent,
    BuscarComponent,
    PeliculaComponent,
    CastShowComponent,
    CardComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    
    
  
  ]
})
export class PagesModule { }
