import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AllHerosComponent } from './all-heros.component';
import { AllHerosHeaderComponent } from './all-heros-header/all-heros-header.component';
import { AllHerosTableComponent } from './all-heros-table/all-heros-table.component';


import { SearchPipe } from '../shared/search.pipe';
import { SortByPipe } from '../shared/sort-by.pipe';
import { SharedModule } from '../shared/shared.module';

const allherosRoute: Routes = [
  { path: "", component: AllHerosComponent }
];

@NgModule({
  declarations: [

    AllHerosComponent,
    AllHerosHeaderComponent,
    AllHerosTableComponent,

    SearchPipe,
    SortByPipe,
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(allherosRoute)
  ],
})
export class AllHerosModule { }
