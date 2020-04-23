import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/pet', pathMatch: 'full' },
  { path: 'pet', loadChildren: () => import('./pet/pet.module').then(m => m.PetModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'volunteer', loadChildren: () => import('./volunteer/volunteer.module').then(m => m.VolunteerModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
