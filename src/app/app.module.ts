import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FirstAComponent } from './first/first-a/first-a.component';
import {FormsModule} from "@angular/forms";
import { ThirdAComponent } from './third/third-a/third-a.component';
import { ThirdBComponent } from './third/third-b/third-b.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FirstAComponent,
    ThirdAComponent,
    ThirdBComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
