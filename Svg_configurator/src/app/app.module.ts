import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewConfigurationComponent } from './new-configuration/new-configuration.component';
import { UpdateConfigurationComponent } from './update-configuration/update-configuration.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NewConfigurationComponent,
    UpdateConfigurationComponent,
    TopNavComponent,
    SideNavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
