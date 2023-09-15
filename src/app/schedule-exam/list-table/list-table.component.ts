import { Component } from '@angular/core';
import { DataResponseService } from '../services/data-response.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ListDialogComponent } from '../list-dialog/list-dialog.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent {
  data : any[] = []

  constructor(
    private dataResponseService:DataResponseService,
    public dialogService: DialogService,
    private datePipe: DatePipe
  ) { }

  ref: DynamicDialogRef | undefined;

  ngOnInit(): void {
    this.data = this.dataResponseService.getResponseData();
    this.data.forEach(element=>{
      element.examDate = this.datePipe.transform(element.examDate, 'dd-MMMM-yyyy')
    })
  }

  show(studentType : string, date : any){
    this.ref = this.dialogService.open(ListDialogComponent, {
      data: {
        studentType : studentType,
        date : date
      },
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    }
  );

  }
}
