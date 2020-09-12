import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  public work1: string;
  public work2: string;

  public company1: string;
  public company2: string;

  public techIcons: string;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.work1 = 'assets/images/professional.png';
    this.work2 = 'assets/images/achievements.png';

    this.company1 = 'assets/images/HCL.png';
    this.company2 = 'assets/images/TCS.png';

    this.techIcons = 'assets/images/';
  }

  public navigateTo(url: string) {
    this.router.navigateByUrl('/'+url);
  }

  public downloadResume(){
    window.open('assets/docs/Pratheep_Resume_UI.docx','_blank ');
  }

}
