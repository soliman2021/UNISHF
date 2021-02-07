import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero.model';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(heros: Hero[], heroName: string): any {
    const filterBy = heroName || "";
    if (heros) {
      return heros.filter(hero => {
        return hero.name.toLowerCase().includes(filterBy.toLowerCase());
      });
    }
  }

}
