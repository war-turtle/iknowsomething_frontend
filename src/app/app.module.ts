import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from 'angular-6-social-login';

// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('585530864114-opnef6nb5ljef65ru21hljmthph8c4hq.apps.googleusercontent.com')
      },
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    HttpClientModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
