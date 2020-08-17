import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.less']
})
export class ImagesComponent implements OnInit {
  constructor(private router:Router,private http:HttpClient){

  }

   images: any = [];
   imagespath: any = [];

   currentImage: number = 0;

  previousImage() {
    if (this.currentImage > 0) {
      this.currentImage--;
    }
  }

  nextImage() {
    if (this.currentImage < this.images.length - 1) {
      this.currentImage++;
    }
  }

  skip() {
    if (this.currentImage < this.images.length - 1) {
      this.currentImage = this.images.length - 1;
    }
  }

  isLastPicture() {
    return (this.currentImage === this.images.length - 1);
  }

  isFirstPicture() {
    return (this.currentImage === 0);
  }

  navHome()
  {
    this.router.navigate(["/home"])
  }
  navToColumbus()
  {
    window.location.href="http://platform.ansyn.io:81/#/";
  }

  ngOnInit(): void {

    this.http.get('http://localhost:3000/pics').toPromise().then(data=>{
      this.images = data
      this.images.filter(element => {
        element='../../assets/pics/presentaion/' + element
        this.imagespath.push(element)
      });
    });

  }


}
