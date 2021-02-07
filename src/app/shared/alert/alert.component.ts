import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'elham-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  msg: string = "";
  constructor(
    public alertService: AlertService,
  ) { }

  ngOnInit() {
    this.msg = this.alertService.msg;
  }

}
