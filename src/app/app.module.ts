import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedioComponent } from './medico/medio.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MedicoComponent } from './intermedio2/medico/medico.component';

const appRoutes: Routes = [
  { path: 'hola', component: MedioComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    MedioComponent,
    MedicoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
