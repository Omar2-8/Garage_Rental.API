import { Router } from '@angular/router';
import { HomeService } from './../../Services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(public home:HomeService) { }

  ngOnInit(): void {
    this.home.getAll();
  }

}
