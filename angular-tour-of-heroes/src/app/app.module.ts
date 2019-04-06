import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { FamilyComponent } from './family/family.component';
import { BatsmanComponent } from './batsman/batsman.component';
import { PlayerComponent } from './player/player.component'; // <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    FamilyComponent,
    BatsmanComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
