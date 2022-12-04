import { Component } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 312;
  count = 0;
  hideRooms = true;
  names = ['rahul', 'mehak', 'raja', 'aman'];
  rooms: Room[] = [
    {
      availableRooms: 0,
      bookedRooms: 5,
      totalRooms: 20,
    },
  ];
  drop() {
    this.names.pop();
  }
  increment() {
    this.count += 1;
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
