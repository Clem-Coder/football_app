import { Component, OnInit } from '@angular/core';
import { Actu } from '../models/actu.model';
import { Picture } from '../models/picture.model';
import { ActuService } from '../services/actu.service';
import { ImageService } from '../services/image.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-actus',
  templateUrl: './actus.component.html',
  styleUrls: ['./actus.component.scss']
})
export class ActusComponent implements OnInit {

  actus!: Actu[] ;
  picture!: Blob ;
  fileToUpload: File | null = null;


  constructor( private actuService : ActuService, private imageService: ImageService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList | null) {
    if(files)
    this.fileToUpload = files.item(0);
  }
    
  getAllActus(){
    this.actuService.getAllActus().subscribe(actus => {this.actus = actus});
  }


}