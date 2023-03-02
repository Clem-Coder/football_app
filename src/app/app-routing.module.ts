import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActusComponent } from './actus/actus.component';
import { EntrainementsComponent } from './entrainements/entrainements.component';
import { EspaceEntraineurComponent } from './espace-entraineur/espace-entraineur.component';
import { GalerieComponent } from './galerie/galerie.component';
import { HistoireComponent } from './histoire/histoire.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoudComponent } from './page-not-foud/page-not-foud.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  { path: 'actus', component: ActusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'images', component: GalerieComponent },
  { path: 'histoire', component: HistoireComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'entraineur/menu', component: EspaceEntraineurComponent },
  { path: 'entrainements', component: EntrainementsComponent },

  { path: '', redirectTo: 'actus', pathMatch : 'full' },
  { path: '**', component: PageNotFoudComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
