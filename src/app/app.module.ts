import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Home-page/homePage-Components/header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavBarComponent } from './Home-page/homePage-Components/nav-bar/nav-bar.component';
import { SliderComponent } from './Home-page/homePage-Components/slider/slider.component';
import { ActionsComponent } from './Home-page/homePage-Components/actions/actions.component';
import { ServiceComponent } from './Home-page/homePage-Components/service-section/service.component';
import { QuoteSectionComponent } from './Home-page/homePage-Components/quote-section/quote-section.component';
import { GallaryComponent } from './Home-page/homePage-Components/gallary/gallary.component';
import { ParallexTestmonilsComponent } from './Home-page/homePage-Components/parallex-testmonils/parallex-testmonils.component';
import { BlogsComponent } from './Home-page/homePage-Components/blogs/blogs.component';
import { ClientsComponent } from './Home-page/homePage-Components/client-details/clients.component';
import { FooterComponent } from './Home-page/homePage-Components/footer/footer.component';
import { HomepageComponent } from './Home-page/homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    SliderComponent,
    ActionsComponent,
    ServiceComponent,
    QuoteSectionComponent,
    GallaryComponent,
    ParallexTestmonilsComponent,
    BlogsComponent,
    ClientsComponent,
    FooterComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
