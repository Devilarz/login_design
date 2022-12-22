import { Component } from '@angular/core';

export interface Employee{
  id : string;
  name : string;
  email : string;
  password : string;
}

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {

  employees : Employee [] = [
    {id : '1', name: 'chamod', email: 'chamod@gmail.com', password: '123' },
    {id : '2', name: 'lakmal', email: 'lakmal@gmail.com', password: '456' },
    {id : '1', name: 'kamal', email: 'kamal@gmail.com', password: '789' },
  ];

constructor(){} 
}