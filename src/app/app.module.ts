import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GalleriaModule } from 'primeng/galleria';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';

import { AngularResizeEventModule } from 'angular-resize-event';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    GalleriaModule,
    FileUploadModule,
    AngularResizeEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
