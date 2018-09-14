
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPetComponent } from './pet/add-pet/add-pet.component';
import { NgModule } from '@angular/core';
import { AdminLoginComponent } from './admin-login/admin-login.component';
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'add-pet', component: AddPetComponent },
    { path: 'admin-login', component: AdminLoginComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
