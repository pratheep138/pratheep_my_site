import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-exp',
  templateUrl: './professional-exp.component.html',
  styleUrls: ['./professional-exp.component.scss']
})
export class ProfessionalExpComponent implements OnInit {

  public company1: string;
  public company2: string;

  constructor() { }

  ngOnInit(): void {
    this.company1 = 'assets/images/HCL.png';
    this.company2 = 'assets/images/TCS.png';
  }

}
