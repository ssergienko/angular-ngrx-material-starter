import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Employee, employees, Room, rooms } from '../map.data';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import {MatDialog} from '@angular/material/dialog';
import { RoomContentComponent } from '../room-dialog/room-dialog.component';
import * as L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

@Component({
  selector: 'anms-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  employees: Employee[] = employees;
  markerOpened = false;
  marker: any;
  private map;

  constructor(public dialog: MatDialog) {
    
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    var imgDimensions = { width: 500, height: 500 };
    let bounds = [[imgDimensions.width, 0], [0, imgDimensions.height]];
    let imageUrl = 'https://w2d-files.s3.amazonaws.com/5thFlour.png';
    this.map = L.map('map', {
      crs: L.CRS.Simple,
      zoomControl: false,
      dragging: true,
      scrollWheelZoom: false,
      doubleClickZoom: false
    }).setView([imgDimensions.height/2, imgDimensions.width/2], 0);
    L.imageOverlay(imageUrl, bounds).addTo(this.map);
    setTimeout(() => {this.map.invalidateSize(true)}, 0);
  }

  private showRoomContent(roomId: number) {
    let dialogRef = this.dialog.open(RoomContentComponent, {
      height: '400px',
      width: '600px',
      data: {employees: employees.filter((employee: Employee) => employee.roomId === roomId), room: this.getRoomById(roomId)}
    });
  }

  getRoomById(roomId: number) {
    return rooms.filter((room: Room) => room.id === roomId)[0];
  }

  getRoomNameById(roomId: number) {
    return rooms.filter((room: Room) => room.id === roomId)[0].name;
  }

  clickToEmployee(employee: Employee) {
    if(this.markerOpened) {
      this.marker.remove();
      this.marker = L.marker(L.latLng(this.getRoomCoordsById(employee.roomId)));
    } else {
      this.marker = L.marker(L.latLng(this.getRoomCoordsById(employee.roomId)));
    }
    this.marker.addTo(this.map);
    this.markerOpened = true;
    this.marker.on('click', () => this.showRoomContent(employee.roomId));
  }

  getRoomCoordsById(roomId: number) {
    let room = rooms.filter((room: Room) => room.id === roomId);
    return room[0].coordinates;
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

  editEmployee(employee: Employee) {
    console.log(employee);
  }

  removeEmployee(employeeId: number) {
    console.log(employeeId);
  }
}