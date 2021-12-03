import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public loginName = 'user';
  public myColor = 'green';
  public counterAbout = 0;
  public counterPower = 0;


  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.counterAbout = this.common.counter;
    this.counterPower = this.common.power(this.counterAbout);
    this.common.counter ++;
  }

}
