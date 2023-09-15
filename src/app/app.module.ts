import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleExamModule } from './schedule-exam/schedule-exam.module';
import { TableModule } from 'primeng/table';
import { DialogService } from 'primeng/dynamicdialog';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleExamModule,
    TableModule
  ],
  providers: [DialogService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
