import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actu } from 'src/app/models/actu.model';

@Injectable({
    providedIn: 'root',
  })
export class ActuService{

    constructor(private httpClient : HttpClient){}

    getAllActus(): Observable<Actu[]>{
       return this.httpClient.get<Actu[]>('http://localhost:8080/actus');
    }
}