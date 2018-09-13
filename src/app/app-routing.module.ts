
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPetComponent } from './pet/add-pet/add-pet.component';
import { NgModule } from '@angular/core';
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'add-pet', component: AddPetComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
