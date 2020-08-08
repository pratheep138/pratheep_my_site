import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './components/work/work.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ProfessionalExpComponent } from './components/professional-exp/professional-exp.component';



@NgModule({
  declarations: [WorkComponent, AchievementsComponent, ProfessionalExpComponent],
  imports: [
    CommonModule,
    WorkRoutingModule
  ]
})
export class WorkModule { }
