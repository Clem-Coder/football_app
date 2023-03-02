import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Picture } from "src/app/models/picture.model";


@Injectable({
    providedIn: 'root',
  })

export class ImageService {

    constructor(private httpClient: HttpClient){}

    getAllPictures() : Observable<Picture[]>{
        return this.httpClient.get<Picture[]>('http://localhost:8080/pictures')
    }

}