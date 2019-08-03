import { Component, OnInit } from '@angular/core';
import { ProsConsService } from '../../../services/pros-cons.service';

@Component({
  selector: 'app-pro-list',
  templateUrl: './pro-list.component.html',
  styleUrls: ['./pro-list.component.scss']
})
export class ProListComponent implements OnInit {
  pros: string[] = [];
  constructor(private prosConsService: ProsConsService) { }

  ngOnInit() {
  }

}
