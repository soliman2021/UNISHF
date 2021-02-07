import { Action } from '@ngrx/store';

export const SEARCH = 'SEARCH';
export const SORT_BY = 'SORT_BY';


export class SearchHerosList implements Action {
    readonly type = SEARCH;
    constructor(public payload: string) { }
}

export class SortHerosListBy implements Action {
    readonly type = SORT_BY;
    constructor(public payload: string) { }
}


export type herosListActions =
    | SearchHerosList
    | SortHerosListBy;