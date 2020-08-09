import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  public award1: string;
  public award2: string;
  public award3: string;

  constructor() { }

  ngOnInit(): void {
    this.award1 = 'assets/images/serviceCommitment.png';
    this.award2 = 'assets/images/BestFaculty.png';
    this.award3 = 'assets/images/OnTheSpot.png';
  }

}
