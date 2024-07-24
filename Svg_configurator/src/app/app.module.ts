import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewConfigurationComponent } from './new-configuration/new-configuration.component';
import { UpdateConfigurationComponent } from './update-configuration/update-configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    NewConfigurationComponent,
    UpdateConfigurationComponent
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
