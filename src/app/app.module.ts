import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActusComponent } from './actus/actus.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GalerieComponent } from './galerie/galerie.component';
import { PageNotFoudComponent } from './page-not-foud/page-not-foud.component';
import { MatButtonModule } from '@angular/material/button';
import { EspaceEntraineurComponent } from './espace-entraineur/espace-entraineur.component';
import { EntrainementsComponent } from './entrainements/entrainements.component';
import { HistoireComponent } from './histoire/histoire.component';
import { PhotosComponent } from './photos/photos.component';
import {  MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActusComponent,
    LoginComponent,
    GalerieComponent,
    PageNotFoudComponent,
    EspaceEntraineurComponent,
    EntrainementsComponent,
    HistoireComponent,
    PhotosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
