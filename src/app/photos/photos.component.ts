import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  images : Blob[] = [];
  imgPreview : any[] = [];

  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];

  constructor(private photoService : PhotosService, private router : Router ) { }

  ngOnInit(): void {
  }

  getImagePreview(event: any){
    this.images.push(...event.target.files);
    for (let i = 0; i < event.target.files.length; i++) {
      var reader = new FileReader();
      if(event.target.files[i]){
        reader.readAsDataURL(event.target.files[i]);
      }
      reader.onload = (events: any) => { 
        this.imgPreview.push(events.target.result);
      }   
    } 
  }

  deletePhoto(id: number){
    this.imgPreview.splice(id,1);
    this.images.splice(id,1);
  }

  uploadPhotos(){
    this.photoService.upload(this.images).subscribe(response => {
      if(response.status == 200)
        this.router.navigateByUrl('images')
    })
  }



}




