import { Component, AfterViewChecked, OnInit, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AlertService } from './shared/alert/alert.service';

@Component({
  selector: 'elham-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showAlert: boolean = false;

  constructor(
    private alertService: AlertService,
    private cdRef: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platfromId,
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platfromId)) {
      localStorage.setItem('FromBrowser', 'hello');
    }
    this.alertService.showError.subscribe(() => {
      this.showAlert = true;
      this.cdRef.detectChanges();
      setTimeout(() => {
        this.showAlert = false;
        this.cdRef.detectChanges();
      }, 3000);
    });
  }
}
