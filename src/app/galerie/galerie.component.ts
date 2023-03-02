import { Component, OnInit } from '@angular/core';
import { Picture } from '../models/picture.model';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss']
})
export class GalerieComponent implements OnInit {

  pictures!: Picture[];


  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.getAllImages()
  }

  getAllImages(){
    this.imageService.getAllPictures().subscribe(pictures => this.pictures = pictures)
  }
  


  
}
