import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-con-item',
  templateUrl: './con-item.component.html',
  styleUrls: ['./con-item.component.scss']
})
export class ConItemComponent implements OnInit {
  @Input('con') con;

  constructor() {
  }

  ngOnInit() {
  }

}
