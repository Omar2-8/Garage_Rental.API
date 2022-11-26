import { HomeService } from './../../Services/home.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(public home :HomeService) { }
  ngOnInit(): void {
    this.home.getAboutUs();
  }
}
