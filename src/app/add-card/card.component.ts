import { Component, OnInit } from '@angular/core';
import { Cards, card_massiv } from '../cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
cartochki:Cards[];

  constructor() { 
    this.cartochki=card_massiv;
  }
  
  ngOnInit(): void {
   
    console.log(card_massiv)
  }
  
  AddCard(kek,vkl){
    console.log(vkl)
    console.log(kek)
    Cards.id++;
    var status=Boolean(Math.round(Math.random()));
    
      this.cartochki.push({id1: Cards.id,status,name: kek,color: vkl})

    
  }
  DeleteCard(id_buttron){
    
    for(let i=0;i<this.cartochki.length;i++){
      console.log(this.cartochki[i])
      console.log(id_buttron)
      if(this.cartochki[i].id1==id_buttron)
        this.cartochki.splice(i,1)
      
    }
   
  }
}
