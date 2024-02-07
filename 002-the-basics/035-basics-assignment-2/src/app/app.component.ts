import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = null;

  isUsernameEmpty():boolean{
    return this.username === null || this.username === undefined || this.username.trim().length === 0;
  }

  resetUsername():void {
    this.username = null;
  }
}
