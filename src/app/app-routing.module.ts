import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { Error404Component } from './components/error404/error404.component';
import { LocationsComponent } from './components/locations/locations.component';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'personajes'},
  {path:'personajes', component:CharactersComponent},
  {path:'planetas', component:LocationsComponent},
  {path:'**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
