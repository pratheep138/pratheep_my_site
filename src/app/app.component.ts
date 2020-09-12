import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mySite';

  constructor(private readonly router: Router) { }

  public navigateTo(url:any){
    this.router.navigateByUrl(url);
  }

  public downloadResume(){
    window.open('assets/docs/Pratheep_Resume_UI.docx','_blank ');
  }
}
