import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SharedModule } from './shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
<<<<<<< HEAD
import { UpadraoreservasComponent } from './pages/upadraoreservas/upadraoreservas.component';
import { AdmsalasComponent } from './pages/admsalas/admsalas.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegistrationComponent, UpadraoreservasComponent, AdmsalasComponent],
=======
import { HomeComponent } from './pages/home/home.component';
import { ReservasAdmComponent } from './pages/reservas-adm/reservas-adm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ReservasAdmComponent,
  ],
>>>>>>> 167dc22855634c0a500d0c51fa90c1ade2b52fdc
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgMaterialModule,
    SharedModule,
    NgxMaskModule.forRoot(),
    MatSidenavModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
