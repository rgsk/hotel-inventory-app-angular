import { Component } from '@angular/core';

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
  increment() {
    console.log('before', this.count);
    this.count += 1;
    console.log('after', this.count);
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
