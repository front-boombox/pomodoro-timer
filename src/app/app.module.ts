import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { TimersTableComponent } from './timers-table/timers-table.component';
import { TimerItemComponent } from './timers-table/timer-item/timer-item.component';

@NgModule({
   declarations: [
      AppComponent,
      TimerComponent,
      TimersTableComponent,
      TimerItemComponent,
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
