import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @HostBinding('class.col')
  isColumn = true;

  constructor() { }

  ngOnInit() {
  }

}
