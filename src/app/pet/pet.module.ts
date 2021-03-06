import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyPetComponent } from './apply-pet/apply-pet.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchPetComponent } from './search-pet/search-pet.component';

const routes: Routes = [
  { path: '', component: PetListComponent, pathMatch: 'full' },
  { path: 'list', component: PetListComponent },
  { path: 'add', component: AddPetComponent },
  { path: 'search', component: SearchPetComponent }];


@NgModule({
  declarations: [ApplyPetComponent, AddPetComponent, PetListComponent, PetCardComponent, SearchPetComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PetModule { }
