import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ROUTING
import { appRoutingProviders } from './app.routing';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    BlogPageComponent,
    GalleryPageComponent,
    ContactPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
