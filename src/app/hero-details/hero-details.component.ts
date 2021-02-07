import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/heros.reducer';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../shared/alert/alert.service';

@Component({
  selector: 'elham-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  selectedHero: Hero;
  defaultImagePath = './../../assets/default-profile.png';

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          const id: number = +params['id'];
          this.store.select('herosList').subscribe((stateData) => {
            const heroList = stateData.heros.filter((h) => h.id == id);
            if (heroList && heroList[0]) {
              this.selectedHero = Object.assign({}, heroList[0]);
              this.selectedHero.imagePath = this.selectedHero.imagePath || this.defaultImagePath;
            } else {
              this.alertService.msg = "No Hero Found!";
              this.alertService.showError.next();
              this.router.navigate(["/"]);
            }
          });
        }
      );
  }

}
