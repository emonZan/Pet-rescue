import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { PetComponent } from './pet/pet.component';
import { PetCardComponent } from './pet/pet-card/pet-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './shared/component/carousel/carousel.component';
import { AddPetComponent } from './pet/add-pet/add-pet.component';
import { AppRoutingModule } from './app-routing.module';
import { ApplyPetComponent } from './pet/apply-pet/apply-pet.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    VolunteerComponent,
    PetComponent,
    PetCardComponent,
    NavbarComponent,
    CarouselComponent,
    AddPetComponent,
    ApplyPetComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
