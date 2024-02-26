import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  numbers: number[];

  constructor() {
    this.numbers = [];
  }

  ngOnDestroy() {
    this.numbers = undefined;
  }

  onNewNumberGenerated(val: number) {
    this.numbers.push(val);
  }

  onResetGame() {
    if (this.numbers && this.numbers.length > 0) {
      this.numbers.splice(0, this.numbers.length);
    }

  }

}
