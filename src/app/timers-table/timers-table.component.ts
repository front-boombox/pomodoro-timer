import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timers-table',
  templateUrl: './timers-table.component.html',
  styleUrls: ['./timers-table.component.scss']
})
export class TimersTableComponent implements OnInit {
  public tasks: any = [
    {
      id: 0,
      name: 'Code an HTML Table',
      deliveryBy: 'Tuesday, June 23, 2015',
      pomodoros: 1,
    },
    {
      id: 1,
      name: 'Sketch a wireframe for the new homepage',
      deliveryBy: 'Friday, June 24, 2016',
      pomodoros: 2,
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
