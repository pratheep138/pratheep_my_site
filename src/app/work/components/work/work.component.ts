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

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.work1 = '../../../assets/images/professional.png';
    this.work2 = '../../../assets/images/achievements.png';
  }

  public navigateTo(url: string) {
    this.router.navigateByUrl('/'+url);
  }

}
