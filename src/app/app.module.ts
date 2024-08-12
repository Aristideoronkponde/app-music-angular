import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AlbumComponent } from './album/album.component';
import { LoginComponent } from './login/login.component';
import { SeachComponent } from './seach/seach.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AlbumComponent,
    LoginComponent,
    SeachComponent,
    AlbumDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
