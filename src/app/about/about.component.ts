import { Component, OnInit, HostBinding } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  data: Observable<any>;

  @HostBinding('class.col')
  private _isColumn = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  loadData() {
    this.data = this.api.getPosts();
  }

}
