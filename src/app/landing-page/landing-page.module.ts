import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ParticlesModule } from 'angular-particle';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ChannelsSectionComponent } from './components/channels-section/channels-section.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [MainPageComponent, HeaderComponent, ChannelsSectionComponent, FooterComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ParticlesModule,
    FontAwesomeModule,
    TranslateModule
  ]
})
export class LandingPageModule { }
