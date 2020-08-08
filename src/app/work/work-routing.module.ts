import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './components/work/work.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ProfessionalExpComponent } from './components/professional-exp/professional-exp.component';


const routes: Routes = [
    {
        path: '',
        component: WorkComponent,
    },
    {
        path: 'achievements',
        component: AchievementsComponent
    },
    {
        path: 'experience',
        component: ProfessionalExpComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
