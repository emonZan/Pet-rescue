import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyVolunteerComponent } from './apply-volunteer/apply-volunteer.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'apply', component: ApplyVolunteerComponent}
]

@NgModule({
  declarations: [ApplyVolunteerComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class VolunteerModule { }
