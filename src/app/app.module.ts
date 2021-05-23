import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Home-page/homePage-Components/header/header.component';
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
import { SideNavBarComponent } from './Home-page/homePage-Components/nav-bar/side-nav-bar/side-nav-bar.component';
import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { SignUpComponent } from './sign-up/sign-up.component';



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
    HomepageComponent,
    SideNavBarComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
