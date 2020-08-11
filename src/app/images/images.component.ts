import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.less']
})
export class ImagesComponent implements OnInit {
  constructor(private router:Router){

  }

  images: any[] = ["../../assets/pics/1.jpg","../../assets/pics/2.jpg","../../assets/pics/3.jpg"];
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
    if (this.currentImage === this.images.length - 1)
    {
      return true;
    }
    else {
      return false;
    }
  }

  isFirstPicture() {
    if (this.currentImage === 0)
    {
      return true;
    }
    else {
      return false;
    }
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

  }
}
