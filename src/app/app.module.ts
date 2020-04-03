import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorSelectorComponent } from './components/color-selector/color-selector.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorSelectorComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
