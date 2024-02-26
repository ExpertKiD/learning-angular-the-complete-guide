import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnDestroy {
  timer:NodeJS.Timeout;
  @Output('numberGenerated') onStart = new EventEmitter<number>();
  @Output('resetGame') onReset = new EventEmitter<void>();
  private count:number;
  ngOnDestroy() {
    this.resetTimer();
  }

  constructor() {
    this.count = 0;
  }

  onStartPressed(){
    if(this.timer ) return;

    this.timer = setInterval(()=>{
      this.count++;
      this.onStart.emit(this.count);

    },1000);
  }

  onStopPressed(){
    this.stopTimer();
  }

  onResetPressed(){
    this.resetTimer();
  }

  private stopTimer(){
    if(this.timer !== null){
      clearTimeout(this.timer);

      this.timer = null;
    }
  }

  private resetTimer(){
    this.stopTimer();

    this.count = 0;

    this.onReset.emit();
  }

}
