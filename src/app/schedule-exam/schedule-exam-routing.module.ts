import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTableComponent } from './list-table/list-table.component';

const routes: Routes = [
  {path: '' , redirectTo: 'examlist', pathMatch: 'full'},
  {path: 'examlist' , component : ListTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleExamRoutingModule { }
