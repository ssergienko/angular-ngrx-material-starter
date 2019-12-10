import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';

import { RoomContentModule } from './features/map/room-dialog/room-dialog.module';

import { RoomContentComponent } from '../app/features/map/room-dialog/room-dialog.component';

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    // app
    AppRoutingModule,

    RoomContentModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  entryComponents: [RoomContentComponent]
})
export class AppModule {}
