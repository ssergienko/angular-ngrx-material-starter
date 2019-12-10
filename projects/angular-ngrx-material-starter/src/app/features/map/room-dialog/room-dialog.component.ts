import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Employee, Room } from '../map.data';

@Component({
    selector: 'room-dialog',
    templateUrl: './room-dialog.component.html',
    styleUrls: ['./room-dialog.component.scss']
  })
  export class RoomContentComponent implements OnInit {
    employees: Employee[] = [];
    room: Room;
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
    ngOnInit() {
        this.employees = this.data.employees;
        console.log(this.data.employees);
        this.room = this.data.room;
    }
  }