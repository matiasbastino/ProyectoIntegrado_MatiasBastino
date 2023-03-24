import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from '../modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { NavbardashboardComponent } from './navbardashboard/navbardashboard.component';
import { LogoutComponent } from '../modals/logout/logout.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { RedesdashboardComponent } from './redesdashboard/redesdashboard.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    BannerComponent,
    DashboardComponent,
    ErrorComponent,
    IndexComponent,
    NavbardashboardComponent,
    LogoutComponent,
    AboutmeComponent,
    RedesdashboardComponent,
    AcercadeComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
