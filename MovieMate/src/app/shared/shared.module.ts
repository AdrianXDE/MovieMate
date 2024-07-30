import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { RouterModule } from '@angular/router';
import { PeliculasPosterComponent } from './peliculas-poster/peliculas-poster.component';
import { LoginComponent } from '../pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrailerComponent } from './trailer/trailer.component';
import { PeliculaAccionComponent } from './pelicula-accion/pelicula-accion.component';




@NgModule({
  declarations: [
    NavbarComponent,
    SlideShowComponent,
    PeliculasPosterComponent,
    LoginComponent,
    TrailerComponent,
    PeliculaAccionComponent,

  ],

  exports:[NavbarComponent,
    SlideShowComponent,
    PeliculasPosterComponent,
    LoginComponent,
    TrailerComponent

    
    
  ],

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  
})
export class SharedModule { }
