import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'VanAnh';
  public age = 15;

  public fruits = ['Tao', 'Le', 'Man', 'Chanh leo'];
  public fruits2 = [
    {fruitName: 'Orange', price: -3, promotion:true},
    {fruitName: 'Pomelo', price: 6,promotion:true},
    {fruitName: 'graph', price: 5, promotion:false}];


    public vietnamData = [{city: 'Select city', districts: ['Select District']},
      {city: 'An Giang', districts: ["Thành phố Long Xuyên","Thành phố Châu Đốc","Thị xã Tân Châu",
                            "Huyện An Phú","Huyện Châu Phú","Huyện Châu Thành","Huyện Chợ Mới","Huyện Phú Tân",
                            "Huyện Thoại Sơn","Huyện Tịnh Biên","Huyện Tri Tôn"]},
                    {city: 'Bà Rịa - Vũng Tàu', districts: ["Thành phố Vũng Tàu","Thị xã Bà Rịa","Thị xã Phú Mỹ",
                    "Huyện Châu Đức","Huyện Côn Đảo","Huyện Đất Đỏ","Huyện Long Điền","Huyện Tân Thành","Huyện Xuyên Mộc"] },
                          ]

  public counterHome = 0;
  public counterPower = 0;
    constructor(private common: CommonService) { }

  ngOnInit(): void {
    console.log('Cities: ', this.vietnamData);
    this.counterHome = this.common.counter;
    this.counterPower = this.common.power(this.counterHome);
    this.common.counter++;

   }

   public districts: string[] = [];
  public changeCity(event: any): void {
    // console.log(event.target.value);


    const citySelected = event.target.value;
    if(!citySelected){
      return;
    }

    console.log("event", citySelected);
    // Cach 1: filter return an array which contains more than one item so we need to pick first item found to manipulate => cityfound[0]
    // const cityFound = this.vietnamData.filter(data => data.city === citySelected);
    // console.log('city Found', cityFound);

    // if(cityFound.length > 0){
    //   this.districts = cityFound[0].districts;

    //   // Cach 2: Use Lambda expressions to find only one city (item selected)

    // }
    this.districts = this.vietnamData.find(data => data.city === citySelected)?.districts|| [];


  }



}
