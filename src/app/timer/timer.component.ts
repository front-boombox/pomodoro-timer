import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  seconds: number;
  isPaused: boolean;
  buttonLabel: string;
  isCompleted: boolean;
  @Input() minutes: number;
  @Output() countdownComplete: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.resetTimer();
    setInterval(() => this.tick(), 1000);
  }

  resetTimer(): void{
    this.minutes = 24;
    this.seconds = 59;
  }

  private tick(): void{
    if(!this.isPaused){
      this.buttonLabel = 'Pause';
      if(--this.seconds < 0){
        this.seconds = 59;
        if(--this.minutes < 0){
          this.resetTimer();
          this.isCompleted = true;
          this.countdownComplete.emit();
        }
      }
    }
  };

  togglePause(): void{
    this.isPaused = !this.isPaused;
    if(this.minutes < 24 || this.seconds < 59){
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }

  resetPomodoro(): void{
    this.minutes = 24;
    this.seconds = 59;
    this.buttonLabel = 'Start';
    this.togglePause();
  }

  ngOnInit() {
  }

}
