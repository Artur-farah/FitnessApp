import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { BmiComponent } from './components/bmi/bmi.component';
import { TrainingLogComponent } from './components/training-log/training-log.component';
import { AlimentationComponent } from './components/alimentation/alimentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ClientsComponent,
    ExercisesComponent,
    BmiComponent,
    TrainingLogComponent,
    AlimentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
