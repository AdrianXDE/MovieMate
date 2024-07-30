import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { LoginComponent } from './pages/login/login.component';
import { CompraComponent } from './shared/compra/compra.component';
import { CardComponent } from './pages/card/card.component';
import { PeliculaAccionComponent } from './shared/pelicula-accion/pelicula-accion.component';
import { RegisterComponent } from './registro/register/register.component';
import { HistorialComponent } from './historial/historial.component';



const routes: Routes = [
{path:'home', component: HomeComponent},
{path:'buscar/:texto', component:BuscarComponent},
{path:'pelicula/:id', component:PeliculaComponent},
{ path: 'login', component: LoginComponent },
{ path: 'compra', component: CompraComponent },
{path: 'Card', component:CardComponent},
{path:'acc', component:PeliculaAccionComponent},
{path:'register', component: RegisterComponent},
{path:'historial-compras',component:HistorialComponent},





{ path: '', pathMatch: 'full', redirectTo: '/login'},
{path:'**', pathMatch:'full',redirectTo:'/home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
