import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleExamRoutingModule } from './schedule-exam-routing.module';
import { ListTableComponent } from './list-table/list-table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { ListDialogComponent } from './list-dialog/list-dialog.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    ListTableComponent,
    ListDialogComponent
  ],
  imports: [
    CommonModule,
    ScheduleExamRoutingModule,
    TableModule,
    ButtonModule,
    BadgeModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    CardModule
  ]
})
export class ScheduleExamModule { }
