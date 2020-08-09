import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public profile: string;
  public skill1: string;
  public skill2: string;

  constructor() { }

  ngOnInit(): void {
    this.profile = 'assets/images/profile.png';
    this.skill1 = 'assets/images/skills.png';
    this.skill2 = 'assets/images/skills2.png';
  }

}
