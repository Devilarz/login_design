import { Component } from '@angular/core';
import { item } from './data-models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testsample';
  
  itemsFromParent : item = {
    label: "Chocolate Ice Cream",
    price: 4.99,
    availabilecount: 50,
    description: "Chocolate Ice cream, Best quality, Low suger",
    imageUrl: "./assets/images/Chocolate-ice-cream.JPG"
  }
  itemsFromParent2 : item = {
    label: "Vanila Ice Cream",
    price: 3.99,
    availabilecount: 60,
    description: "Vanilla is frequently used to flavor ice cream",
    imageUrl: "./assets/images/Vanila-ice-cream.JPG"
  }
  itemsFromParent3 : item = {
    label: "Mixed Ice Cream",
    price: 5.99,
    availabilecount: 80,
    description: "Mixed Ice cream, Best quality, Low suger",
    imageUrl: "./assets/images/Mixed-ice-cream.JPG"
  }
  itemsFromParent4 : item = {
    label: "Chocolate cup cream",
    price: 6.99,
    availabilecount: 20,
    description: "Chocolate Cup Cream, Best quality, Low suger",
    imageUrl: "./assets/images/Chocolate-ice-cup.JPG"
  }
  itemsFromParent5 : item = {
    label: "Vanila cup cream",
    price: 5.99,
    availabilecount: 30,
    description: "Vanila Cup Cream, Best quality, Low suger",
    imageUrl: "./assets/images/Vanila-ice-cup.JPG"
  }
  itemsFromParent6 : item = {
    label: "Mixed cup cream",
    price: 8.99,
    availabilecount: 20,
    description: "Mixed Cup Cream, Best quality, Low suger",
    imageUrl: "./assets/images/Mixed-ice-cup.JPG"
  }
}
