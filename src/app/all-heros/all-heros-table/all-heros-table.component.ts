import { Component, OnInit, Input, OnDestroy, ViewChildren } from '@angular/core';
import { Hero } from 'src/app/shared/hero.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/heros.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'elham-all-heros-table',
  templateUrl: './all-heros-table.component.html',
  styleUrls: ['./all-heros-table.component.scss']
})
export class AllHerosTableComponent implements OnInit, OnDestroy {
  @Input("heros") heros: Hero[];

  heroName: string;
  sortByValue: string;
  subs: Subscription;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    // getting the data from the store to use it in the table
    this.subs = this.store.select("herosList").subscribe((stateData) => {
      this.heros = stateData.heros;
      this.heroName = stateData.search;
      this.sortByValue = stateData.sortBy;
    })
  }

  ngOnDestroy() {
    // to clear the subscription after closing the component
    this.subs.unsubscribe();
  }

}