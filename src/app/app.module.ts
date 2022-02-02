import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {
  saverPackageFactory,
  SAVER_PACKAGE_TOKEN,
} from './download-with-rxjs/provider/saver.provider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
  ],
  providers: [
    { provide: SAVER_PACKAGE_TOKEN, useFactory: saverPackageFactory },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
