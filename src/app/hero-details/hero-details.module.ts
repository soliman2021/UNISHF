import { NgModule } from '@angular/core';
import { HeroDetailsComponent } from './hero-details.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const detailsRoute: Routes = [
  { path: "", component: HeroDetailsComponent }
];

@NgModule({
  declarations: [
    HeroDetailsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(detailsRoute)
  ]
})
export class HeroDetailsModule { }
