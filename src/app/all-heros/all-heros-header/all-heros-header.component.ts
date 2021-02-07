import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/heros.reducer';
import * as fromHerosListActions from "./../../store/heros.actions";

@Component({
  selector: 'elham-all-heros-header',
  templateUrl: './all-heros-header.component.html',
  styleUrls: ['./all-heros-header.component.scss']
})
export class AllHerosHeaderComponent implements OnInit {
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  onChangeSearchValue(value) {
    this.store.dispatch(new fromHerosListActions.SearchHerosList(value));
  }

  // To send the sort by value to the reducer
  onChangeSortBy(checked) {
    const sortingBy = checked ? "rate" : "power";
    this.store.dispatch(new fromHerosListActions.SortHerosListBy(sortingBy));
  }

}
