import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToPresntion()
  {
    this.router.navigate(['/presention'])
  }
  navigateToColumbus(){
    window.location.href="http://platform.ansyn.io:81/#/";
  }
  navigateToShortVideo(){
    window.location.href="https://www.youtube.com/watch?v=HHtslr3nAYc";
  }

}
