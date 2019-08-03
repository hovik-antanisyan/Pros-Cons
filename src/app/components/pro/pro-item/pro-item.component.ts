import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro-item',
  templateUrl: './pro-item.component.html',
  styleUrls: ['./pro-item.component.scss']
})
export class ProItemComponent implements OnInit {
  @Input('pro') pro;

  constructor() { }

  ngOnInit() {
  }

}
