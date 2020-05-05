import { Component } from '@angular/core';
import { Cards, card_massiv } from './cards';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards: Cards[]
  constructor(){
    for(var i=0;i<10;i++){
   var status=Boolean(Math.round(Math.random()));
  Cards.id++;
  
      if(status==true){
        var color='green';
      }
      else{
        color='red'
      }
      card_massiv.push({id1: Cards.id,status,name: 'Имя',color})
    }
    
  }
  title = 'my-app';
  hello(){
    return "Hello world"
  }
  

  onAddCard(card)
  {
  
    card_massiv.push(card);
  }
  

}
console.log(card_massiv)
