import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero.model';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heros: Hero[], sortByValue: string): any {
    if (sortByValue == "power") {
      // sort by number of powers
      return heros.sort((a, b) => b.powers.length - a.powers.length);
    } else if (sortByValue == "rate") {
      // sort by rating
      return heros.sort((a, b) => b.rate - a.rate);
    } else {
      // default in case some sort value added and not handled here.
      return heros;
    }
  }
}
