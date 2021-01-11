import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {ProgramCardComponent} from './program-card/program-card.component';
import { FiltersComponent } from './filters/filters.component';
import { TagComponent } from './filters/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramCardComponent,
    FiltersComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
