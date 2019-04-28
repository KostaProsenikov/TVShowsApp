import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShowsService } from './services/shows.service';
import { NavigationComponent } from './nav/navigation/navigation.component';
import { FooterComponent } from './nav/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    ShowsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
