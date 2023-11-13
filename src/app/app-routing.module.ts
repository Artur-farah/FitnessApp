import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {ClientsComponent } from './components/clients/clients.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { BmiComponent } from './components/bmi/bmi.component';
import { TrainingLogComponent } from './components/training-log/training-log.component';
import { AlimentationComponent } from './components/alimentation/alimentation.component';

const routes: Routes = [  {
  path: 'home', //localhost:4200/home
  component: HomeComponent
},
{
  path: 'clients', //localhost:4200/clients
  component: ClientsComponent
},
{
  path: 'exercises', //localhost:4200/exercises
  component: ExercisesComponent
},
{
  path: 'bmi', //localhost:4200/bmi
  component: BmiComponent
},
{
  path: 'alimentation', //localhost:4200/alimentation
  component: AlimentationComponent
},
{
  path: 'training-log', //localhost:4200/training-log
  component: TrainingLogComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
