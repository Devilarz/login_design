import { Component, Input, OnInit } from '@angular/core';
import { item } from '../data-models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  @Input()
  item!: item;

  constructor() {}

  // itemLable: string = 'default Lable';
  // itemDescription : string = 'default Description';
  // ItemAvailability : number=2;
  // itemimage : string = "./assets/images/Chocolate-ice-cream.JPG";

  ngOnInit(): void {

}

buyitem() {
  console.log("Buying item : " + this.item.label);
}

}
