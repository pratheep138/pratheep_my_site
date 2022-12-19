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
  public award4: string;
  public award5: string;
  public award6: string;
  public award7: string;
  public award8: string;
  public award9: string;
  public award10: string;

  constructor() { }

  ngOnInit(): void {
    this.award1 = 'assets/images/starPerformer.png';
    this.award2 = 'assets/images/serviceCommitment.png';
    this.award3 = 'assets/images/BestFaculty.png';
    this.award4 = 'assets/images/OnTheSpot.png';
    this.award5 = 'assets/images/IndiaCIO.jpg';
    this.award6 = 'assets/images/ACE.jpg';
    this.award7 = 'assets/images/GAE.jpg';
    this.award8 = 'assets/images/Pinnacle.jpg';
    this.award9 = 'assets/images/BestLead.jpg';
    this.award10 = 'assets/images/GCP.jpg';
  }

}
