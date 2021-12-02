import { Component, OnInit } from '@angular/core';

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
    {fruitName: 'graph', price: 5, promotion:false}]
  constructor() { }

  ngOnInit(): void {
    console.log('Fruits', this.fruits);

   }



}
