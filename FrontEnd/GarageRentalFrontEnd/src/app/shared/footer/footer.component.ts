import { HomeService } from 'src/app/Services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  constructor(public home:HomeService) { }

  ngOnInit(): void {
    this.home.getHome();
  }

}
