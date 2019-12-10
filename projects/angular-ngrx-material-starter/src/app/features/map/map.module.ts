import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { MapComponent } from './map/map.component';
import { MapRoutingModule } from './map-routing.module';

import { RoomContentModule } from './room-dialog/room-dialog.module';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, SharedModule, MapRoutingModule, RoomContentModule]
})
export class MapModule {}
