import { HttpClient, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PhotosService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  upload(images: Blob[]) : Observable<any>{
    const formData: FormData = new FormData();
    images.forEach(image => formData.append('image', image))
    return this.http.post('http://localhost:8080/picture/upload', formData  ,{observe: 'response'} );
  }

}
