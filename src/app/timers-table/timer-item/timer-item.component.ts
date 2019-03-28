import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer-item',
  templateUrl: './timer-item.component.html',
  styleUrls: ['./timer-item.component.scss']
})
export class TimerItemComponent implements OnInit {
  @Input() public tasks: any;
  constructor() { }

  ngOnInit() {
  }

}
