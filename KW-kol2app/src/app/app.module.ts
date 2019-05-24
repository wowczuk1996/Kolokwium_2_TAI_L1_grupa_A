import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {KWDataService} from "./service/kw-data.service";
import { KWBlogComponent } from './kw-blog/kw-blog.component';
import { KWBlogItemComponent } from './kw-blog-item/kw-blog-item.component';
import { KWBlogDetailsComponent } from './kw-blog-details/kw-blog-details.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    KWBlogComponent,
    KWBlogItemComponent,
    KWBlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    KWDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
