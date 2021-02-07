import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/heros.reducer';
import * as fromHerosListActions from "./../store/heros.actions";

@Component({
  selector: 'elham-all-heros',
  templateUrl: './all-heros.component.html',
  styleUrls: ['./all-heros.component.scss']
})
export class AllHerosComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

}
