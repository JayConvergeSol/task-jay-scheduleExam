import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DataResponseService } from '../services/data-response.service';

@Component({
  selector: 'app-list-dialog',
  templateUrl: './list-dialog.component.html',
  styleUrls: ['./list-dialog.component.css']
})
export class ListDialogComponent implements OnInit{
  data : any[] = []
  absent : boolean = false
  title = ''
  constructor(
    private ref : DynamicDialogRef,
    public config: DynamicDialogConfig,
    private dataResponseService : DataResponseService
  ){}
  
  ngOnInit(): void {

    this.data = this.dataResponseService.getResponseData();
  
    let temp = this.data.filter(element => element.examDate == this.config.data.date )
    
    if(this.config.data.studentType == 'Absent'){
      this.absent = true;
      this.title = 'Absent Candidates List';      
      this.data = temp[0].absentCandidates
    }else{
      this.title = 'Present Candidates List';
      this.data = temp[0].presentCandidates
    }
  }

}
